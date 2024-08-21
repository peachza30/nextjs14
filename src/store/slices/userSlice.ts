import { UserData } from '@/src/models/user.model';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import * as user from '@/services/users.service';

interface userState {
  users: UserData[];
  loading: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  cart: number;
}

const initialState: userState = {
  users: [],
  loading: false,
  cart: 0,
  status: 'idle'
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await user.getUsers();
  return response;
});

export const createUser = createAsyncThunk(
  'user/createUser',
  async (data: UserData) => {
    const response = await user.createUser(data);
    return response;
  }
)
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (data: UserData) => {
    const response = await user.updateUser(data);
    return response;
  }
)
export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async (data: UserData) => {
    const response = await user.deleteUser(data);
    return response;
  }
)

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
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
      });
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((item) => {
          if (item.id == action.payload.id) {
            return action.payload;
          }
          return item;
        });
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
      });
    builder
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((item) => item.id != action.payload.id);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
export const { addCart } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
