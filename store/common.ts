/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { PayloadActionCreator } from 'typesafe-actions';

interface Action {
  type: string;
  payload: unknown;
}

type ApiGroup = {
  [key: string]: (...args: any[]) => Promise<AxiosResponse>;
};

export type AsyncAction<RequestType = any, SuccessType = any, FailureType = any> = {
  request: PayloadActionCreator<string, RequestType>;
  success: PayloadActionCreator<string, SuccessType>;
  failure: PayloadActionCreator<string, FailureType>;
};

export function createSaga(
  asyncAction: AsyncAction,
  apiGroup: ApiGroup,
  apiName: keyof ApiGroup,
  setLoading: PayloadActionCreator<string, boolean>,
  loading = false,
) {
  return function* saga(action: Action) {
    if (loading) yield put(setLoading(true));
    try {
      const response: AxiosResponse = yield call(apiGroup[apiName], action.payload);
      yield put(asyncAction.success(response.data));
    } catch (e) {
      yield put(asyncAction.failure(e));
    } finally {
      if (loading) yield put(setLoading(false));
    }
  };
}
