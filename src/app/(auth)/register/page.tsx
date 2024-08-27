'use client';

import React from 'react';
import Link from "next/link";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Avatar,
  useTheme
} from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TfacIcon from '@/public/images/logos/tfacIcon.png'
import TfacLogo from '@/public/images/logos/tfacLogo.png'

const SignUpPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            component="img"
            sx={{
              height: 203,
              width: 500,
              maxHeight: { xs: 233, md: 300 },
              maxWidth: { xs: 350, md: 480 },
            }}
            alt="tfac"
            src={TfacLogo.src}
          />
          {/* <Typography component="h1" variant="h5">
            Welcome to Modernize
          </Typography>
          <Typography variant="subtitle1">
            Your Admin Dashboard
          </Typography> */}

          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
              >
                Sign up with Google
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<FacebookIcon />}
              >
                Sign up with FB
              </Button>
            </Grid>
          </Grid>

          <Typography variant="body2" sx={{ mt: 2 }}>
            or sign up with
          </Typography>

          <Box sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <Link href="/attach/education" className='mr-3'>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Link>
          </Box>

          <Typography variant="body2">
            Already have an Account? <Link href="#">Sign in</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUpPage;