import type { NextPage } from 'next';
import { dispatch, useSelector } from 'store';
import { getUserState } from 'store/reducers/user';
import { Button, TextField } from '@mui/material';
import { AnyAction } from '@reduxjs/toolkit';

export type User = {
  email: string;
  name: string;
  birthday: Date;
};

const STORE: NextPage = () => {
  const { userName } = useSelector(state => state.user);

  const handleUpdateButtonClick = () => {
    //TODO: 사활을 걸고 해결!
    dispatch(getUserState(1) as unknown as AnyAction);
  };

  return (
    <>
      <TextField value={userName} />
      <Button onClick={handleUpdateButtonClick}>update</Button>
    </>
  );
};

export default STORE;
