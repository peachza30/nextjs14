'use client';
import React from 'react';
import { Grid, Box, Card, Typography, Stack } from "@mui/material";
import PageContainer from "@/components/container/PageContainer";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className=''>

      {children}

    </div >
  );
};

export default layout;
