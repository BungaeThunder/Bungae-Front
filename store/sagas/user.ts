import Api from 'lib/utils';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { getUserNameAction, setUserLoading } from 'store/actions/user';

const userApi = {
  user: () => Api.get(`/users/1`),
};

function* getUserNameSaga() {
  yield put(setUserLoading(true));
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const response = yield call(userApi.user);
    yield put(getUserNameAction.success(response.data.name));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    yield put(getUserNameAction.failure(error));
  } finally {
    yield put(setUserLoading(false));
  }
}

function* watchSetUserState() {
  yield takeLatest(getUserNameAction.request, getUserNameSaga);
}

export default function* userSaga() {
  yield all([fork(watchSetUserState)]);
}
