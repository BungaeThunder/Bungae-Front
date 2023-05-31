import React from 'react';
import { Box, Container, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export const LastCake = () => {
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Container fixed sx={{ padding: 0 }}>
        <Box sx={{ bgcolor: 'transparent', color: 'white' }}>
          <h3>지난 케익 방문하기</h3>
          <FormControl fullWidth sx={{ bgcolor: 'rgba(255,255,255,0.4)', color: 'white' }}>
            <InputLabel id="lastCakesLabel">Last Cakes</InputLabel>
            <Select
              labelId="lastCakesLabel"
              id="lastCakes"
              value={age}
              label="Last Cakes"
              onChange={handleChange}
            >
              <MenuItem value={10}>2023년 4월 25일 생일 케이크</MenuItem>
              <MenuItem value={20}>2022년 4월 25일 생일 케이크</MenuItem>
              <MenuItem value={30}>2021년 4월 25일 생일 케이크</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
    </React.Fragment>
  );
};
