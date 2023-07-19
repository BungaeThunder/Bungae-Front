import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

export type UserResponse = {
  birthday: string;
  email: string;
  name: string;
};

export const SET_USER_LOADING = 'user/set-user-loading';
export const setUserLoading = createAction(SET_USER_LOADING)<boolean>();

export const GET_USER_NAME_REQUEST = 'user/get-user-name-request';
export const GET_USER_NAME_SUCCESS = 'user/get-user-name-success';
export const GET_USER_NAME_FAILURE = 'user/get-user-name-failure';
export const getUserName = createAsyncAction(
  GET_USER_NAME_REQUEST,
  GET_USER_NAME_SUCCESS,
  GET_USER_NAME_FAILURE,
)<number, UserResponse, AxiosError>();
