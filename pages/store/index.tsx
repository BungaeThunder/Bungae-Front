import type { NextPage } from 'next';
import { dispatch, useDispatch, useSelector } from 'store';
import { getUserState } from 'store/reducers/user';
import { Button, TextField } from '@mui/material';
import { useEffect } from 'react';

export type User = {
  email: string;
  name: string;
  birthday: Date;
};

const API_TEST: NextPage = () => {
  const { userName } = useSelector(state => state.user);
  const dispatch = useDispatch;

  const handleUpdateButtonClick = () => {
    // dispatch(getUserState());
  };

  return (
    <>
      <TextField value={userName} />
      <Button onClick={handleUpdateButtonClick}>update</Button>
    </>
  );
};

export default API_TEST;
