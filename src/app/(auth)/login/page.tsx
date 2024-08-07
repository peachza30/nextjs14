'use client';
import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <div className="mt-5">
          <h1 className="text-3xl text-blue-500 font-bold text-center">
            Next JS Starter..
          </h1>
        <div className="flex justify-center mt-3">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => signIn('google')}
          >
            <FcGoogle size={30} /> Sign in with Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
