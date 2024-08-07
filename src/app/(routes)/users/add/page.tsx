'use client';
import {Button, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '@/store/store';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { UserData } from '@/src/models/user.model';
import { formValidateSchema } from '@/libs/formValidationSchema';


export default function StockCreate() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const initialValue: UserData = { name: '', email: '' };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    defaultValues: initialValue,
    resolver: yupResolver(formValidateSchema),
  });

  const onSubmit = async (values: UserData) => {
    console.log(values);
  };

  return (
    <div className="container mx-auto">
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
    </div>
  );
}
