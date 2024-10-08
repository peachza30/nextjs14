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
import PersonalForm from '@/src/components/forms/theme-elements/PersonalForm';
import EducationForm from '@/src/components/forms/theme-elements/EducationForm';
import AddressForm from '@/src/components/forms/theme-elements/AddressForm';
import FileUploadForm from '@/src/components/forms/theme-elements/FileUploadForm';
import ResultForm from '@/src/components/forms/theme-elements/ResultForm';
// import MultiStepForm from "@/components/forms/theme-elements/MultiStepForm";

const steps = [
  {
    label: 'ข้อมูลส่วนบุคคล',
    content: <PersonalForm key="personal-form" />,
  },
  {
    label: 'ข้อมูลการศึกษา',
    content: <EducationForm key="education-form" />,
  },
  {
    label: 'ข้อมูลที่อยู่',
    content: <AddressForm key="address-form" />,
  },
  {
    label: 'ไฟล์เอกสาร',
    content: <FileUploadForm key="fileUpload-form" />,
  },
  {
    label: 'สรุปข้อมูล',
    content: <ResultForm key="result-form"   />,
  },
];

const Address = () => {

  return <VerticalStepper steps={steps} />;

};

export default Address;