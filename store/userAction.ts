import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

type UserResponse = {
  birthday: string;
  email: string;
  name: string;
};

export const SET_USER_LOADING = 'user/set-user-loading' as const;
export const setUserLoading = createAction('user/set-user-loading')<boolean>();

export const GET_USER_NAME_REQUEST = 'user/get-user-name-request' as const;
export const GET_USER_NAME_SUCCESS = 'user/get-user-name-success' as const;
export const GET_USER_NAME_ERROR = 'user/get-user-name-error' as const;
export const getUserNameAction = createAsyncAction(
  GET_USER_NAME_REQUEST,
  GET_USER_NAME_SUCCESS,
  GET_USER_NAME_ERROR,
)<number, UserResponse, AxiosError>();
