import * as Yup from 'yup';
export const formValidateSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').trim(),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required')
      .trim(),
  });
  