import { useState, Fragment } from 'react';
import {
  Box,
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from '@mui/material';

const boxStyle = { bgcolor: 'transparent', color: 'white' };
const formControlStyle = { bgcolor: 'rgba(255,255,255,0.4)', color: 'white' };

export const LastCake = () => {
  const [age, setAge] = useState<string>();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Fragment>
      <Container fixed sx={{ padding: 0 }}>
        <Box sx={boxStyle}>
          <h3>지난 케익 방문하기</h3>
          <FormControl fullWidth sx={formControlStyle}>
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
    </Fragment>
  );
};
