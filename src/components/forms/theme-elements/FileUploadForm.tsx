import React, { useState } from 'react';
import { Box, Button, Typography, InputLabel, FormControl, TextField, Stack } from '@mui/material';

interface FileUploadProps {
    label: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ label }) => {
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(event.target.files || []);
        const maxSize = 5 * 1024 * 1024; // 5 MB

        if (selectedFiles.some(file => file.size > maxSize)) {
            setError('One or more files exceed the 5 MB limit.');
            return;
        }

        setError(null);
        setFiles(selectedFiles);
    };

    return (
        <FormControl fullWidth>
            <Typography color="error" variant="h3">
                {/* file upload */}
            </Typography>
            <InputLabel htmlFor="file-upload">{ }</InputLabel>
            <TextField
                type="file"
                id="file-upload"
                multiple
                onChange={handleFileChange}
                variant="outlined"
                fullWidth
                // sx={{ mb: 1 }}
            />
            {error && (
                <Typography color="error" variant="body2" sx={{ mb: 1 }}>
                    {error}
                </Typography>
            )}
            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                {files.map((file, index) => (
                    <Typography key={index} variant="body2" sx={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {file.name}
                    </Typography>
                ))}
            </Stack>
        </FormControl>
    );
};

const FileUploadForm: React.FC = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'red' }}>
                เฉพาะไฟล์นามสกุล .jpg/.jpeg/.png/.gif | หากพบปัญหาไม่สามารถ Browse ไฟล์เอกสารได้เนื่องจากไฟล์มีขนาดเกิน 1 MB
            </Typography>
            <Stack spacing={3}>
                {[...Array(5)].map((_, index) => (
                    <FileUpload key={index} label={`File ${index + 1}`} />
                ))}
            </Stack>
        </Box>
    );
};

export default FileUploadForm;
