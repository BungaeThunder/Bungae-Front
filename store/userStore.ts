import { ActionType, createReducer } from 'typesafe-actions';
import * as userActions from './userAction';

export type UserAction = ActionType<typeof userActions>;

type receivedLetter = {
  senderId: number;
  text: string;
  voiceUrl: string;
  bookmark: boolean;
  isRead: boolean;
};

type writeLetter = {
  receiverId: number;
  text: string;
  voiceUrl: string;
};

type cake = {
  id: number;
  birthday: string;
  receivedLetters: receivedLetter[];
};

type userState = {
  id: number;
  name: string;
  birthday: string;
  cakes: cake[]; // api 응답에서 최신순 정렬 보장해줘야 함
  currentCakeId: number;
  writeLetters: writeLetter[];
  loading: boolean;
};

//TODO: 초기값 설정 고민 필요
const initialState: userState = {
  id: 0,
  name: 'TEST',
  birthday: '',
  cakes: [],
  currentCakeId: 0,
  writeLetters: [],
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
      name: action.payload.name,
    };
  },
  [userActions.GET_USER_NAME_ERROR]: (state, action) => {
    return {
      ...state,
      error: action.payload,
    };
  },
});

export default userStore;
