// Pagination.tsx
import React from 'react';
import { Button, Box, Typography } from '@mui/material';

interface PaginationProps {
  steps: string[];
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ steps, currentStep, onNext, onBack }) => {
  return (
    <Box>
      <Typography variant="h6">
        Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
      </Typography>
      <Box mt={2}>
        <Button
          disabled={currentStep === steps.length - 1}
          onClick={onNext}
          variant="contained"
          style={{ marginLeft: '10px', marginRight: '10px' }}
        />
        <Button disabled={currentStep === 0} onClick={onBack} variant="contained" style={{ marginLeft: '10px', marginRight: '10px' }}/>
        <Button disabled={currentStep === 0} onClick={onBack} variant="contained"  style={{ marginLeft: '10px', marginRight: '10px' }}/>
      </Box>
    </Box>
  );
};

export default Pagination;
