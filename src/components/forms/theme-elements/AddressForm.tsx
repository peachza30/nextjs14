// AddressForm.tsx
import React, { useState } from 'react';
import { Grid, TextField, Stack, Typography, MenuItem } from '@mui/material';
import Pagination from './Pagination'; // Adjust the import path as necessary

const AddressForm: React.FC = () => {
  const steps = ['Home Address', 'Office Address', 'Receive Address'];
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    console.log(currentStep);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2} >
            <Grid item xs={2}>
              <TextField label="เลขที่" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={5}>
              <TextField label="หมู่" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={5}>
              <TextField label="หมู่บ้าน" variant="outlined" fullWidth required />
            </Grid>

            <Grid item xs={4}>
              <TextField label="ซอย" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="ถนน" variant="outlined" fullWidth required />
            </Grid>

            <Grid item xs={4}>
              <TextField
                select
                label="ตำบล"
                variant="outlined"
                fullWidth
                required
              >
                <MenuItem value="bangkok">แขวง xxx</MenuItem>
                <MenuItem value="nonthaburi">แขวง xxx</MenuItem>
                <MenuItem value="pathumthani">แขวง xxx</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                select
                label="อำเภอ"
                variant="outlined"
                fullWidth
                required
              >
                <MenuItem value="bangkok">เขต xxx</MenuItem>
                <MenuItem value="nonthaburi">เขต xxx</MenuItem>
                <MenuItem value="pathumthani">เขต xxx</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                select
                label="จังหวัด"
                variant="outlined"
                fullWidth
                required
              >
                <MenuItem value="bangkok">กรุงเทพมหานคร</MenuItem>
                <MenuItem value="nonthaburi">นนทบุรี</MenuItem>
                <MenuItem value="pathumthani">ปทุมธานี</MenuItem>
              </TextField>
            </Grid>


            <Grid item xs={4}>
              <TextField label="Home Address" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Home Address" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Home Address" variant="outlined" fullWidth required />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="Office Number" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Street" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Office Address" variant="outlined" fullWidth required />
            </Grid>
            {/* Add more fields for the Office Address section */}
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="Receive Number" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Street" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Receive Address" variant="outlined" fullWidth required />
            </Grid>
            {/* Add more fields for the Receive Address section */}
          </Grid>
        );
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <div>
      <Pagination steps={steps} currentStep={currentStep} onNext={handleNext} onBack={handleBack} />
      <form>
        <Stack spacing={3}>
          {renderStepContent(currentStep)}
        </Stack>
      </form>
    </div>
  );
};

export default AddressForm;
