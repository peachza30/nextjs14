import { UserData } from '@/src/models/user.model';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import * as user from '@/services/users.service';

interface userState {
  users: UserData[];
  loading: boolean;
  cart: number;
}

const initialState: userState = {
  users: [],
  loading: false,
  cart: 0,
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await user.getUsers();
  return response;
});

// export const createUsers = createAsyncThunk(
//   'user/createUsers',
//   async (data: UserData) => {
//     const response = await user.createUser(data);
//     return response;
//   }
// )

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart = state.cart + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
      });
    // builder
    //   .addCase(addEmployee.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(addEmployee.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.employeeList.push(action.payload);
    //     state.response = "add";
    //   })
    //   .addCase(addEmployee.rejected, (state, action) => {
    //     state.loading = false;
    //     state.message = action.error.message;
    //   });

    //     builder.addCase(removeEmployee.fulfilled, (state, action) => {
    //       state.employeeList = state.employeeList.filter(
    //         (item) => item._id != action.payload
    //       );
    //       state.response = "delete";
    //     });

    //     builder.addCase(modifiedEmployee.fulfilled, (state, action) => {
    //       const updateItem = action.payload;
    //       console.log(updateItem);
    //       const index = state.employeeList.findIndex(
    //         (item) => item._id === updateItem._id
    //       );
    //       if (index!==-1) {
    //         state.employeeList[index] = updateItem;
    //       }
    //       state.response = "update";
    //     });
  },
});

export default userSlice.reducer;
export const { addCart } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
