import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import Api from 'lib/utils';

type userState = {
  userName: string;
  birthday: string;
  isBirthday: boolean;
};

const initialState: userState = {
  userName: 'TATATA',
  birthday: '2222-14-23',
  isBirthday: false,
};

export const getUserState = createAsyncThunk('', async () => {
  const response = await axios.get('api/sample');
  return response.data;
});

const userStore = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setUser(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserState.fulfilled, (state, action) => {
      state.userName = action.payload.userName;
    });
  },
});
export default userStore.reducer;
export const { setUser } = userStore.actions;
