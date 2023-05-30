import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} sx={{ color: 'text.primary' }} />
      </ListItemButton>
    </ListItem>
  );
}

export const SentLetters = () => {
  return (
    <Container fixed sx={{ padding: 0 }}>
      <Box sx={{ width: '100%', height: 140, bgcolor: '#cfe8fc' }}>
        <h3>내가 보낸 편지들</h3>
        <FixedSizeList height={100} fullWidth itemSize={20} itemCount={10} overscanCount={5}>
          {renderRow}
        </FixedSizeList>
      </Box>
    </Container>
  );
};
