import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import Api from 'lib/utils';
// import Api from 'lib/utils';

type userState = {
  userName: string;
  birthday: string;
  isBirthday: boolean;
  loading: boolean;
};

const initialState: userState = {
  userName: 'TEST',
  birthday: '',
  isBirthday: false,
  loading: false,
};

type UserInfoResponse = {
  name: string;
};

const userApi = {
  userInfo: (userId: number) => Api.get(`/users/${userId}`),
};

export const getUserState = createAsyncThunk('cakey/user/getUserState', async (userId: number) => {
  const response: AxiosResponse<UserInfoResponse> = await userApi.userInfo(userId);
  return response.data;
});

const userStore = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getUserState.pending, state => {
        state.loading = true;
      })
      .addCase(getUserState.fulfilled, (state, action) => {
        state.userName = action.payload.name;
      })
      .addCase(getUserState.rejected, state => {
        state.loading = true;
      });
  },
});
export default userStore.reducer;
export const { setUserName } = userStore.actions;
