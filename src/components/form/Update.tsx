'use client';
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { UserData } from '@/src/models/user.model';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { formUserValidateSchema } from '@/src/libs/formValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '@/src/store/store';
import { updateUser } from '@/src/store/slices/userSlice';

interface Props {
  open: boolean;
  onClose: () => void;
  user: UserData | null;
}
export default function FormDialog({ open, onClose, user }: Props) {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserData>({
    defaultValues: user || {},
    resolver: yupResolver(formUserValidateSchema),
  });

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  const onSubmit = async (values: UserData) => {
    const res = await dispatch(updateUser(values));
    if (res.meta.requestStatus === 'fulfilled') {
      onClose();
    }
  };
  return (
    <React.Fragment>
      <Dialog open={open}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardContent className="p-8">
              <Typography gutterBottom variant="h3">
                Update Users
              </Typography>
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    error={Boolean(errors.name?.message)}
                    helperText={errors.name?.message?.toString()}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    autoFocus
                  />
                )}
              />
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message?.toString()}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    autoFocus
                  />
                )}
              />
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                className="mr-2"
              >
                Update
              </Button>
              <Button fullWidth variant="outlined" onClick={onClose}>
                Cancel
              </Button>
            </CardActions>
          </Card>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
