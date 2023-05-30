import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const LastCake = () => {
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed sx={{ padding: 0 }}>
        <Box sx={{ bgcolor: '#cfe8fc' }}>
          <h3>지난 케익 방문하기</h3>
          <FormControl fullWidth>
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
