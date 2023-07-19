import { AxiosError } from 'axios';
import Api from 'lib/utils';
import { all, fork, takeLatest } from 'redux-saga/effects';
import { UserResponse, getUserName, setUserLoading } from 'store/userAction';
import { AsyncAction, createSaga } from './common';

const userApi = {
  getUser: (id: string) => Api.get(`/users/${id}`),
};

export function createUserSaga(
  asyncAction: AsyncAction<number, UserResponse, AxiosError>,
  apiName: keyof typeof userApi,
  loading = false,
) {
  return createSaga(asyncAction, userApi, apiName, setUserLoading, loading);
}

function* watchSetUserState() {
  yield takeLatest(getUserName.request, createUserSaga(getUserName, 'getUser', true));
}

export default function* userSaga() {
  yield all([fork(watchSetUserState)]);
}
