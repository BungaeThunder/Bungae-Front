import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'store';
import { getUserName } from 'store/userAction';
import { Button, TextField } from '@mui/material';

const STORE: NextPage = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.user);

  const handleUpdateButtonClick = () => {
    dispatch(getUserName.request(1));
  };

  return (
    <>
      <TextField value={name} />
      <Button onClick={handleUpdateButtonClick}>update</Button>
    </>
  );
};

export default STORE;
