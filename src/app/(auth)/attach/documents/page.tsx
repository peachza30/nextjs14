"use client";
import * as React from 'react';
import { useState } from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

import { Grid, Box, Card, Typography, Stack, TextField } from "@mui/material";

// import Image from '@mui/material/Image'; // Ensure this is the correct import path

import Link from "next/link";
import PageContainer from "@/components/container/PageContainer";
import Logo from "@/components/layout/shared/logo/Logo";
import AuthRegister from "@/components/auth/AuthRegister";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { log } from 'console';

import TfacLogo from "@/public/images/logos/tfacLogo.png";
import FileUpload from "@/components/forms/theme-elements/FileUpload";



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

const Address = () => {
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
                        // component="img"
                        sx={{
                            height: 233,
                            width: 350,
                            maxHeight: { xs: 180, md: 120 },
                            maxWidth: { xs: 350, md: 250 },
                            marginTop: { xs: 2, md: 16 }
                        }}
                    // alt="tfacLogo"
                    // src={TfacLogo.src}
                    />

                    <Grid
                        item
                        xs={12}
                        sm={12}
                        lg={12}
                        xl={12}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >

                        <Card
                            elevation={9}
                            sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "900px" }}
                        >
                            <Box sx={{ width: '100%' }}>
                                <FileUpload />
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </PageContainer >
    );
};

export default Address;