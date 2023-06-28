import * as React from 'react';
import { Stack, Button } from '@mui/material';

const stackStyle = { marginTop: '8%', padding: 0 };

export const LogoutButton = () => {
  return (
    <Stack spacing={2} sx={stackStyle}>
      <Button variant="outlined" color="warning" fullWidth>
        Logout
      </Button>
      <Button variant="outlined" fullWidth>
        Support us
      </Button>
    </Stack>
  );
};
