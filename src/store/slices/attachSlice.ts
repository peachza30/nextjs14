import { DepartmentData } from '@/src/models/department.model';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import * as department from '@/services/department.service';

interface departmentState {
  department: DepartmentData[];
  loading: boolean;
  cart: number;
}

const initialState: departmentState = {
  department: [],
  loading: false,
  cart: 0,
};

export const fetchDepartments = createAsyncThunk('attach/fetchData', async () => {
  const response = await department.getDepartment();
  return response;
});

const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart = state.cart + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.loading = false;
        state.department = action.payload;
      })
      .addCase(fetchDepartments.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default departmentSlice.reducer;
export const { addCart } = departmentSlice.actions;
export const departmentSelector = (state: RootState) => state.attachReducer;
