"use client";
import * as React from 'react';
import { useState } from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

import { Grid, Box, Card, Typography, Stack, TextField, Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import Image from '@mui/material/Image'; // Ensure this is the correct import path

import Link from "next/link";
import PageContainer from "@/components/container/PageContainer";

import TfacLogo from "@/public/images/logos/tfacLogo.png";
import FileUpload from "@/components/forms/theme-elements/FileUpload";

const topic = [
    "1. รูปถ่ายปัจจุบัน",
    "2. สำเนาบัตรประจำตัวประชาชน",
    "3. สำเนาหลักฐานการศึกษาทางการบัญชี",
    "4. สำเนาทะเบียนสมรส (ถ้ามี)",
    "5. สำเนาใบสำคัญการเปลี่ยนชื่อ (ถ้ามี)",
    "6. สำเนาใบสำคัญการเปลี่ยนชื่อสกุล (ถ้ามี)"
]
const steps = [
    'ข้อมูลส่วนตัว',
    'ข้อมูลการศึกษา',
    'ช้อมูลที่อยู่',
    'แนบเอกสาร',
    'สรุป',
];
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
}) as typeof Chip;
function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Documents = () => {
    const [hoveredLabel, setHoveredLabel] = useState(null);

    return (
        <PageContainer title="Register" description="this is Register page">
            <Box
                sx={{
                    position: "relative",
                    "&:before": {
                        content: '""',
                        // background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
                        // backgroundSize: "100% 100%",
                        // animation: "gradient 15s ease infinite",
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        opacity: "0.3",
                        zIndex: -1,
                    },
                }}
            >
                <Grid
                    container
                    spacing={0}
                    justifyContent="center"
                    sx={{ height: "100%" }}
                >
                    <Box
                        sx={{
                            maxHeight: { xs: 180, md: 120 },
                            maxWidth: { xs: 350, md: 250 },
                            marginTop: { xs: 2, md: 16 },
                        }}
                    />
                    <Card
                        elevation={9}
                        sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "1200px", marginTop: { xs: 2, md: 12 } }}
                    >
                        {/* <Grid item xs={12} sm={12} lg={12} xl={12} alignItems="center" justifyContent="center">
                            <Box sx={{ width: '100%' }}>
                                <Typography variant="h3" gutterBottom sx={{ mb: 2 }}>
                                    แนบเอกสาร
                                </Typography>
                            </Box>
                        </Grid> */}


                        <Grid container spacing={1} >
                            <Grid item p={1} xs={2} sm={2} lg={2} xl={2} mr={2}>
                                <Stepper activeStep={3} orientation="vertical">
                                    {steps.map((stepLabel, index) => (
                                        <Step key={index}>
                                            <StepLabel
                                                onMouseEnter={() => setHoveredLabel(index)}
                                                onMouseLeave={() => setHoveredLabel(null)}
                                                sx={{
                                                    transition: "all 0.3s ease",
                                                    transform: hoveredLabel === index ? "scale(1.05)" : "scale(1)",
                                                    color: hoveredLabel === index ? "#1976d2" : "inherit",
                                                }}
                                            >
                                                {hoveredLabel === index ? `Hovered: ${stepLabel}` : stepLabel}
                                            </StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Grid>
                            <Grid container spacing={2} xs={10} sm={10} lg={10} xl={10} mt={2}>
                                {topic.map((item, index) => (
                                    <Grid key={index} item xs={12} sm={4} lg={6} xl={6} >
                                        <Box sx={{ width: '100%' }} >
                                            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                                                {item}
                                            </Typography>
                                        </Box>
                                        <FileUpload id={`${index}`} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Typography variant="h6" gutterBottom sx={{ mb: 2, mt: 5, color: 'red' }}>
                            หมายเหตุ : ผู้สมัครสมาชิกต้องลงนามรับรองสำเนาถูกต้องในเอกสารทุกฉบับ
                        </Typography>
                        <Grid item xs={12}>
                            <Stack direction="row" spacing={2} justifyContent="center" mt={5} >
                                <Link href="/attach/address" className='mr-3'>
                                    <Button variant="outlined" color="error" startIcon={<ArrowBackIosNewIcon />}>
                                        Back
                                    </Button>
                                </Link>
                                <Link href="/attach/documents" className='mr-3'>
                                    <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
                                        Next
                                    </Button>
                                </Link>
                            </Stack>
                        </Grid>
                    </Card>
                </Grid>
            </Box>
        </PageContainer>
    );
};

export default Documents;