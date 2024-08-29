import React, { useState } from 'react';
import { Grid, TextField, Stack, Typography, MenuItem, Box } from '@mui/material';

const PersonalForm: React.FC = () => {
  const steps = ['ข้อมูลส่วนบุคคล'];
  const [currentStep, setCurrentStep] = useState<number>(0);

  const PersonalContent = (step: number) => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField label="เลขบัตรประชาชน" variant="outlined" fullWidth required />
        </Grid>
        <Grid item xs={4}>
          <TextField label="ชื่อ" variant="outlined" fullWidth required />
        </Grid>
        <Grid item xs={4}>
          <TextField label="นามสกุล" variant="outlined" fullWidth required />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="วันเกิด"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField label="เชื้อชาติ" variant="outlined" fullWidth required />
        </Grid>
        <Grid item xs={4}>
          <TextField label="สัญชาติ" variant="outlined" fullWidth required />
        </Grid>

        <Grid item xs={4}>
          <TextField label="เบอร์โทรศัพท์" variant="outlined" fullWidth required />
        </Grid>
        <Grid item xs={4}>
          <TextField label="อีเมล" variant="outlined" fullWidth required />
        </Grid>
        <Grid item xs={4}>
          <TextField label="เพศ" variant="outlined" fullWidth required />
        </Grid>
      </Grid>
    );
  };

  return (
    <Box>
      <Stack spacing={3}>
        <form>{PersonalContent(currentStep)}</form>
      </Stack>
    </Box>
  );
};

export default PersonalForm;