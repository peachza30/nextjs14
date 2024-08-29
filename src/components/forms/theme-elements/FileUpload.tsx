import React, { useState } from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close';

interface FileUploadProps {
  id: string;
}
  const FileUpload: React.FC<FileUploadProps> = ({ id }) => {

  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  const handleRemoveFile = () => {
    setFileName(null);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      border="1px solid #ccc"
      borderRadius="4px"
      padding="8px"
      width="100%"
      maxWidth="300px"
    >
      <UploadFileIcon style={{ marginRight: '8px' }} />
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        id={`file-upload-${id}`}
      />
      <label htmlFor="file-upload" style={{ flexGrow: 1, cursor: 'pointer' }}>
        {fileName ? (
          <Typography variant="body2">{fileName}</Typography>
        ) : (
          <Typography variant="body2" color="textSecondary">Select a file</Typography>
        )}
      </label>
      {fileName && (
        <IconButton onClick={handleRemoveFile} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
};

export default FileUpload;