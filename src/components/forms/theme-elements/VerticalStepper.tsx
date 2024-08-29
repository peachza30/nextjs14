import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
  Box,
  Grid,
  Card
} from '@mui/material';
import AddressForm from '@/src/components/forms/theme-elements/AddressForm';
import PersonalForm from '@/src/components/forms/theme-elements/PersonalForm';

type StepData = {
  label: string;
  content: React.ReactNode;
};

interface VerticalStepperProps {
  steps: StepData[];
}

const VerticalStepper: React.FC<VerticalStepperProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: 2,
    }}>
      <Card
        elevation={10}
        sx={{
          p: 4,
          zIndex: 1,
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>

                <Typography>{step.content}</Typography>
                <Box sx={{ mb: 2 }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, mr: 1 }}
                    color={index === 4 ? 'success' : 'primary'}

                  >
                    {index === steps.length - 1 ? 'บันทึก' : 'ต่อไป'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 3, mr: 1 }}
                  >
                    ย้อนกลับ
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Card>
    </Box>
  );
};

export default VerticalStepper;