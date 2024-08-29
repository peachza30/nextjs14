// AddressForm.tsx
import React, { useState } from 'react';
import { Grid, TextField, Stack, Typography, MenuItem, Box } from '@mui/material';
import Pagination from './Pagination'; // Adjust the import path as necessary
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const AddressForm: React.FC = () => {
  const tabs = ['Home Address', 'Office Address', 'Receive Address'];
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, tabs.length - 1));
    console.log(currentStep);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const renderTapsContent = (tabs: number) => {

    switch (tabs) {
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
              <TextField label="รหัสไปรษณีย์" variant="outlined" fullWidth required />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2} >
            <Grid item xs={2}>
              <TextField label="อาคาร" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={2}>
              <TextField label="ชั้น" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={2}>
              <TextField label="เลขที่" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={2}>
              <TextField label="หมู่" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={4}>
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
              <TextField label="รหัสไปรษณีย์" variant="outlined" fullWidth required />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2} >
            <Grid item xs={12}>
              <TextField label="บริษัท" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={2}>
              <TextField label="อาคาร" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={2}>
              <TextField label="ชั้น" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={2}>
              <TextField label="เลขที่" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={2}>
              <TextField label="หมู่" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={4}>
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
              <TextField label="รหัสไปรษณีย์" variant="outlined" fullWidth required />
            </Grid>
          </Grid>
        );
      default:
        return <div>Unknown Step</div>;
    }
  };
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (

    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ที่อยู่ตามบัตรประชาชน" {...a11yProps(0)} />
          <Tab label="ที่อยู่ปัจจุบัน" {...a11yProps(1)} />
          <Tab label="ที่อยู่ที่ทำงาน" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {renderTapsContent(0)}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {renderTapsContent(1)}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {renderTapsContent(2)}
      </CustomTabPanel>
    </Box>
  );
};

export default AddressForm;
