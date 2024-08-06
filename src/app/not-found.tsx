import React from 'react';
import { Box, Typography } from '@mui/material';
import { blue, purple } from '@mui/material/colors';

const primary = blue[300]; // #f44336

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <div>
        <Typography variant="h1" style={{ color: 'white' }}>
          404
        </Typography>
        <Typography variant="h5" style={{ color: 'white' }}>
          Page Not Found
        </Typography>
      </div>
    </Box>
  );
}