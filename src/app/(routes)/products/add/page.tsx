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
import { formProductValidateSchema } from '@/libs/formValidationSchema';
import { createProduct } from '@/src/store/slices/productSlice';
import { ProductData } from '@/src/models/product.model';


export default function StockCreate() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const initialValue: ProductData = { productName: '', };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductData>({
    defaultValues: initialValue,
    resolver: yupResolver(formProductValidateSchema),
  });

  const onSubmit = async (values: ProductData) => {
    // const response = await createProduct(values);
    // console.log(response);
    dispatch(createProduct(values))
  };

  return (
    <div className="container mx-auto">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardContent className="p-8">
          <Typography gutterBottom variant="h3">
            Add Product
          </Typography>
          <Controller
            control={control}
            name="productName"
            render={({ field }) => (
              <TextField
                {...field}
                label="Product Name"
                error={Boolean(errors.productName?.message)}
                helperText={errors.productName?.message?.toString()}
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
            onClick={() => router.push('/products')}
          >
            Cancel
          </Button>
        </CardActions>
      </Card>
    </form>
    </div>
  );
}
