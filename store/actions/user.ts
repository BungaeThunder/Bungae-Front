import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

export const SET_USER_LOADING = 'cakey/user/set-user-loading' as const;
export const setUserLoading = createAction(SET_USER_LOADING)<boolean>();

export const GET_USER_NAME_REQUEST = 'cakey/user/get-user-name-request' as const;
export const GET_USER_NAME_SUCCESS = 'cakey/user/get-user-name-success' as const;
export const GET_USER_NAME_FAILURE = 'cakey/user/get-user-name-failure' as const;
export const getUserNameAction = createAsyncAction(
  GET_USER_NAME_REQUEST,
  GET_USER_NAME_SUCCESS,
  GET_USER_NAME_FAILURE,
)<void, string, AxiosError>();
