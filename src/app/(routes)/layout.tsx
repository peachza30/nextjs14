'use client';
import { Box } from '@mui/material';
import React, { Suspense } from 'react';
import Loading from '@/components/layout/Loading';

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Box>
    </Box>
  );
};

export default layout;
