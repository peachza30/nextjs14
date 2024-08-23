'use client';
import { Button, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '@/store/store';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { UserData } from '@/src/models/user.model';
import { formUserValidateSchema } from '@/libs/formValidationSchema';
import {
  createUser,
  fetchUsers,
  userSelector,
} from '@/src/store/slices/userSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Update from '@/components/form/Update';
import Confirm from '@/src/components/common/Confirm';

export default function StockCreate() {
  const userReducer = useSelector(userSelector);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  const initialValue: UserData = { name: '', email: '' };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    defaultValues: initialValue,
    resolver: yupResolver(formUserValidateSchema),
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const onSubmit = async (values: UserData) => {
    dispatch(createUser(values));
  };

  const handleUpdate = (user: UserData) => {
    setOpen(true);
    setSelectedUser(user);
  };
  const handleDelete = (user: UserData) => {
    setConfirm(true);
    setSelectedUser(user);
  };

  return (
    <div className="container mx-auto">
      {userReducer.loading === true && (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      )}
      {userReducer.status === 'failed' && (
        <h1 className="text-3xl font-bold mt-5 text-center">Fail</h1>
      )}
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardContent className="p-8">
            <Typography gutterBottom variant="h3">
              Create Users
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
              Create
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => router.push('/users')}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </form>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {userReducer.users.map((user: UserData, index: number) => (
          <Card key={index}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Name
              </Typography>
              <Typography variant="h5" component="div">
                {user.name}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary">
                Email
              </Typography>
              <Typography component="div">{user.email}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                onClick={() => handleUpdate(user)}
              >
                Edit
              </Button>
              <Button variant="contained" color="error" size="small" onClick={() => handleDelete(user)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <Update open={open} onClose={() => setOpen(false)} user={selectedUser} />
      <Confirm open={confirm} onClose={() => setConfirm(false)} user={selectedUser}/>
    </div>
  );
}
