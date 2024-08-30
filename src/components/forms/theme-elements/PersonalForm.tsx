import React, { useState } from 'react';
import { Grid, TextField, Stack, Box, Button } from '@mui/material';
import { useAppDispatch } from '@/store/store';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserData } from '@/src/models/user.model';
import { formUserValidateSchema } from '@/libs/formValidationSchema';

const PersonalForm: React.FC = () => {
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
  const steps = ['ข้อมูลส่วนบุคคล'];
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [formData, setFormData] = useState({
    idNo: '',
    name: '',
    surname: '',
    birthDate: '',
    nationality: '',
    race: '',
    phoneNumber: '',
    email: '',
    sex: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmit = async (values: UserData) => {
    dispatch(createUser(values));
  };

  const PersonalContent = (step: number) => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="เลขบัตรประชาชน"
            variant="outlined"
            fullWidth
            required
            name="idNo"
            value={formData.idNo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="ชื่อ"
            variant="outlined"
            fullWidth
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="นามสกุล"
            variant="outlined"
            fullWidth
            required
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="วันเกิด"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            required
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="เชื้อชาติ"
            variant="outlined"
            fullWidth
            required
            name="race"
            value={formData.race}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="สัญชาติ"
            variant="outlined"
            fullWidth
            required
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="เบอร์โทรศัพท์"
            variant="outlined"
            fullWidth
            required
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="อีเมล"
            variant="outlined"
            fullWidth
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="เพศ"
            variant="outlined"
            fullWidth
            required
            name="sex"
            value={formData.sex}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    );
  };

  return (
    <Box>
      <Stack spacing={3}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          {PersonalContent(currentStep)}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Stack>
    </Box>
  );
};

export default PersonalForm;