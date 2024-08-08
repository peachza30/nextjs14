'use client';
import { Button } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Dashboard = (props: Props) => {
  const { data: session } = useSession();


  return (
    <>
      {session && (
        <div className="mt-5 flex justify-center items-center gap-3">
          <div className="">
            <Image
              src={session.user?.image!}
              alt="profile"
              className="rounded-full"
              width={100}
              height={100}
            />
            <h1>Hello, {session.user?.name}</h1>
            <h1 className="text-3xl text-blue-500 font-bold text-center">
              Welcome back
            </h1>
           
            <Link href="/users" className='mr-3'>
            <Button variant="contained" color="primary">
              Page Users
            </Button>
          </Link>

          </div>

         
        </div>
      )}
    </>
  );
};

export default Dashboard;
