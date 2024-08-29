import React from 'react';
import { Box, Typography, Button, Stack, Card, CardContent } from '@mui/material';

interface AddressData {
    homeAddress: string;
    officeAddress: string;
    receiveAddress: string;
}

interface FileData {
    name: string;
}

interface ReviewFormProps {
    addressData: AddressData;
    files: FileData[];
    onEdit: () => void;
    onSubmit: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ }) => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                ตรวจสอบความถูกต้อง
            </Typography>
            <Card variant="outlined" sx={{ mb: 2 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        ข้อมูลส่วนบุคคล
                    </Typography>
                    <Stack spacing={1} mb={3}>
                        <Typography variant="body1"><strong>Home Address:</strong> 123</Typography>
                        <Typography variant="body1"><strong>Office Address:</strong> 456</Typography>
                        <Typography variant="body1"><strong>Receive Address:</strong>789 </Typography>
                    </Stack>
                    <Typography variant="h6" gutterBottom>
                        ข้อมูลการศึกษา
                    </Typography>
                    <Stack spacing={1} mb={3}>
                        <Typography variant="body1"><strong>Home Address:</strong> 123</Typography>
                        <Typography variant="body1"><strong>Office Address:</strong> 456</Typography>
                        <Typography variant="body1"><strong>Receive Address:</strong>789 </Typography>
                    </Stack>
                    <Typography variant="h6" gutterBottom>
                        ข้อมูลที่อยู่
                    </Typography>
                    <Stack spacing={1} mb={3}>
                        <Typography variant="body1"><strong>Home Address:</strong> 123</Typography>
                        <Typography variant="body1"><strong>Office Address:</strong> 456</Typography>
                        <Typography variant="body1"><strong>Receive Address:</strong>789 </Typography>
                    </Stack>
                    
                </CardContent>
            </Card>

            <Card variant="outlined" sx={{ mb: 2 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Uploaded Files
                    </Typography>
                    {/* <Stack spacing={1}>
            {files.map((file, index) => (
              <Typography key={index} variant="body1">
                {file.name}
              </Typography>
            ))}
          </Stack> */}
                </CardContent>
            </Card>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                {/* <Button variant="contained" color="success" >
                    Submit
                </Button> */}
            </Stack>
        </Box>
    );
};

export default ReviewForm;
