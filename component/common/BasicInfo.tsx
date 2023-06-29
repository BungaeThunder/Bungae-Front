import React from 'react';
import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const containerStyle = { padding: 0 };
const boxStyle = { bgcolor: 'transparent', color: 'white' };

type BasicInfoProps = {
  userName: string;
};

export const BasicInfo: React.FC<BasicInfoProps> = ({ userName }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed sx={containerStyle}>
        <Box sx={boxStyle}>
          <h2>{userName}님</h2>
          <h3>당신의 생일은 13월 57일 입니다.</h3>
        </Box>
      </Container>
    </React.Fragment>
  );
};
