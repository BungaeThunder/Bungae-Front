import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'store';
import { getUserNameAction } from 'store/userAction';
import { Button, TextField } from '@mui/material';

const STORE: NextPage = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.user);

  const handleUpdateButtonClick = () => {
    dispatch(getUserNameAction.request(1));
  };

  return (
    <>
      <TextField value={name} />
      <Button onClick={handleUpdateButtonClick}>update</Button>
    </>
  );
};

export default STORE;
