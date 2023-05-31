import * as React from 'react';
import { Stack, Button } from '@mui/material';

export const LogoutButton = () => {
  return (
    <Stack spacing={2} sx={{ marginTop: '8%', padding: 0 }}>
      <Button variant="outlined" color="warning" fullWidth>
        Logout
      </Button>
      <Button variant="outlined" fullWidth>
        Support us
      </Button>
    </Stack>
  );
};
