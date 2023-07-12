import { ActionType, createReducer } from 'typesafe-actions';
import * as userActions from '../actions/user';

type UserAction = ActionType<typeof userActions>;

type userState = {
  userName: string;
  birthday: string;
  isBirthday: boolean;
  loading: boolean;
};

const initialState: userState = {
  userName: 'TEST',
  birthday: '',
  isBirthday: false,
  loading: false,
};

const userStore = createReducer<userState, UserAction>(initialState, {
  [userActions.SET_USER_LOADING]: (state, action) => {
    return {
      ...state,
      loading: action.payload,
    };
  },
  [userActions.GET_USER_NAME_SUCCESS]: (state, action) => {
    return {
      ...state,
      userName: action.payload,
    };
  },
});

export default userStore;
