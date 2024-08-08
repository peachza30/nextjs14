'use client';
import React, { Suspense } from 'react';
import Loading from '@/components/layout/Loading';
import { Button } from '@mui/material';
import { signOut } from 'next-auth/react';

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className='container mx-auto'>
                <Button
              variant="contained"
              color="error"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Sign Out
            </Button>
        <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
};

export default layout;
