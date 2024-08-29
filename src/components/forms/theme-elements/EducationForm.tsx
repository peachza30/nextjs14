import React, { useState } from 'react';
import { Grid, TextField, Stack, Typography, MenuItem, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const EducationForm: React.FC = () => {
  const [membershipType, setMembershipType] = useState('');

  const handleMembershipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMembershipType((event.target as HTMLInputElement).value);
  };
  const steps = ['ข้อมูลส่วนบุคคล'];
  const [currentStep, setCurrentStep] = useState<number>(0);

  const renderStepContent = (step: number) => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="membership-type"
              name="membership-type"
              value={membershipType}
              onChange={handleMembershipChange}
            >
              <FormControlLabel value="สามัญ" control={<Radio />} label="สมาชิกสามัญ" />
              <FormControlLabel value="วิสามัญ" control={<Radio />} label="สมาชิกวิสามัญ" />
              <FormControlLabel value="สมทบ" control={<Radio />} label="สมาชิกสมทบ" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <TextField
            select
            label="จำนวนปี"
            variant="outlined"
            fullWidth
            required
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="0">...</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField label="สถาบัน" variant="outlined" fullWidth disabled sx={{backgroundColor: 'rgba(224, 224, 224, 0.5)' }}/>
        </Grid>
        <Grid item xs={4}>
          <TextField
            select
            label="ระดับการศึกษา"
            variant="outlined"
            fullWidth
            required
          >
            <MenuItem value="1">มหาวิทยาลัย 1</MenuItem>
            <MenuItem value="2">มหาวิทยาลัย 2</MenuItem>
            <MenuItem value="3">มหาวิทยาลัย 3</MenuItem>
            <MenuItem value="4">มหาวิทยาลัย 4</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField label="สาขาวิชา" variant="outlined" fullWidth required />
        </Grid>
        <Grid item xs={4}>
          <TextField
            select
            label="ระดับการศึกษา"
            variant="outlined"
            fullWidth
            required
          >
            <MenuItem value="1">อนุปริญญา</MenuItem>
            <MenuItem value="2">ปริญญาตรี</MenuItem>
            <MenuItem value="3">ปริญญาโท</MenuItem>
            <MenuItem value="4">ปริญญาเอก</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="วันที่เริ่มการศึกษา" sx={{ width: '100%' }} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="วันที่จบการศึกษา" sx={{ width: '100%' }} />
          </LocalizationProvider>
        </Grid>
      </Grid>
    );
  };

  return (
    <Box>
      <Stack spacing={3}>
        <form>{renderStepContent(currentStep)}</form>
      </Stack>
    </Box>
  );
};

export default EducationForm;