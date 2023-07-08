import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from 'react-redux';

import { createLogger } from 'redux-logger';

import reducers from './reducers';

const logger = createLogger();

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    const middleware = getDefaultMiddleware();
    return [...middleware, logger];
  },
});
export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;
const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
export { store, dispatch, useSelector, useDispatch };
