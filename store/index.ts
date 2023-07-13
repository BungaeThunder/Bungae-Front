import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import userSaga from './userSaga';
import user from './userStore';

const RootReducer = combineReducers({
  user,
});

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const store = configureStore({
  reducer: RootReducer,
  middleware: [sagaMiddleware, logger],
});
sagaMiddleware.run(userSaga);
export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch;
const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, dispatch, useSelector, useDispatch };
