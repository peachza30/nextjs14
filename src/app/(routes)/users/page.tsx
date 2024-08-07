'use client';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/src/store/store';
import { fetchUsers, userSelector } from '@/src/store/slices/userSlice';
import { UserData } from '@/src/models/user.model';
import Link from 'next/link';
import { Button } from '@mui/material';

type Props = {};

const Users = (props: Props) => {
  const dispatch = useAppDispatch();
  const userReducer = useSelector(userSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-5 text-center">Users</h1>
      <Link href="/users/add">
        <Button variant="contained" color="primary">
          Add User
        </Button>
      </Link>
      <Link href="/dashboard" className='ml-3'>
        <Button variant="contained" color="error">
          Go Back
        </Button>
      </Link>
      <ul>
        {userReducer.users.map((user: UserData, index) => (
          <li key={index}>
            <h2>{user.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
