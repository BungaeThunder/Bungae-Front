import type { NextPage } from 'next';
import { dispatch, useSelector } from 'store';
import { getUserNameAction } from 'store/actions/user';
import { Button, TextField } from '@mui/material';

export type User = {
  email: string;
  name: string;
  birthday: Date;
};

const STORE: NextPage = () => {
  const { userName } = useSelector(state => state.user);

  const handleUpdateButtonClick = () => {
    //TODO: 사활을 걸고 해결!
    dispatch(getUserNameAction.request());
  };

  return (
    <>
      <TextField value={userName} />
      <Button onClick={handleUpdateButtonClick}>update</Button>
    </>
  );
};

export default STORE;
