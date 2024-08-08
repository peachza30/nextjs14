import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import * as user from '@/services/users.service';

interface productState {
  loading: boolean;
  cart: number;
}

const initialState: productState = {
  loading: false,
  cart: 0,
};

// export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
//     const response = await user.getUsers();
//     return response;
//   });

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart = state.cart + action.payload;
    },
  },
  extraReducers: (builder) => {
  },
});

export default productSlice.reducer;
export const { addCart } = productSlice.actions;
export const productSelector = (state: RootState) => state.productReducer;
