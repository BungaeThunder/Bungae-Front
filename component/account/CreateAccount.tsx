import * as React from 'react';
import { Box, Stack, Input, FormControlLabel, Checkbox, Button } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };

export const CreateAccount = () => {
  return (
    <Box component="form" sx={{ padding: '5%' }} autoComplete="off">
      <h1>계정 생성하기</h1>
      <Stack spacing={2}>
        <Input placeholder="이름" inputProps={ariaLabel} />
        <Input placeholder="XXXX.XX.XX" inputProps={ariaLabel} />
        <Input placeholder="Email" inputProps={ariaLabel} />
      </Stack>
      <FormControlLabel
        sx={{ mt: '3%' }}
        control={<Checkbox />}
        label="생일 알림을 위한 이메일 수신에 동의합니다."
      />
      <Box sx={{ mx: 'auto', mt: '5%', width: 200 }}>
        <Button variant="contained" sx={{ width: 200 }}>
          나만의 케이크 만들기
        </Button>
      </Box>
    </Box>
  );
};
