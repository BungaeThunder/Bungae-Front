import React from 'react';
import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

type BasicInfoProps = {
  userName: string;
};

export const BasicInfo: React.FC<BasicInfoProps> = ({ userName }) => {
  console.log('@BasicInfo: ' + userName);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed sx={{ padding: 0 }}>
        <Box sx={{ bgcolor: 'transparent', color: 'white' }}>
          <h2>{userName}님</h2>
          <h3>당신의 생일은 13월 57일 입니다.</h3>
        </Box>
      </Container>
    </React.Fragment>
  );
};
