import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import userStore from './userStore';
import userSaga from './userSaga';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const store = configureStore({
  reducer: userStore,
  middleware: [sagaMiddleware, logger],
});
sagaMiddleware.run(userSaga);
export type RootState = ReturnType<typeof userStore>;
export type AppDispatch = typeof store.dispatch;
const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, dispatch, useSelector, useDispatch };
