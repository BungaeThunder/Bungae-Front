import { AxiosError } from 'axios';
import Api from 'lib/utils';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { getUserNameAction, setUserLoading } from 'store/userAction';

const userApi = {
  user: (id: string) => Api.get(`/users/${id}`),
};

interface Action {
  type: string;
  payload: unknown;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createSaga = (userAction: any, apiName: string, loading = false) => {
  return function* saga(action: Action) {
    if (loading) yield put(setUserLoading(true));
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const response = yield call(userApi[apiName], action.payload);
      yield put(userAction.success(response.data));
    } catch (e) {
      yield put(userAction.failure(e as AxiosError));
    } finally {
      if (loading) yield put(setUserLoading(false));
    }
  };
};

function* watchSetUserState() {
  yield takeLatest(getUserNameAction.request, createSaga(getUserNameAction, 'user', true));
}

export default function* userSaga() {
  yield all([fork(watchSetUserState)]);
}
