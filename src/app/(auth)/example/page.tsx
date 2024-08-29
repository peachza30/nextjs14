"use client";
import * as React from 'react';
import { useState } from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

import { Grid, Box, Card, Typography, Stack, TextField, Pagination } from "@mui/material";

// import Image from '@mui/material/Image'; // Ensure this is the correct import path

import Link from "next/link";
import PageContainer from "@/components/container/PageContainer";
import Logo from "@/components/layout/shared/logo/Logo";
import AuthRegister from "@/components/auth/AuthRegister";

import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { log } from 'console';

import VerticalStepper from "@/components/forms/theme-elements/VerticalStepper";
// import MultiStepForm from "@/components/forms/theme-elements/MultiStepForm";

const steps = [
    { label: 'Step 1', content: 'Content for step 1...' },
    { label: 'Step 2', content: 'Content for step 2...' },
    { label: 'Step 3', content: 'Content for step 3...' },
  ];

const Address = () => {

    return <VerticalStepper steps={steps}/>;

};

export default Address;