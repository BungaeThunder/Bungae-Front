import React from 'react';
import { Box, Container, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import CommentIcon from '@mui/icons-material/Comment';

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem
      style={style}
      key={index}
      component="div"
      disablePadding
      secondaryAction={
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      }
    >
      <ListItemButton>
        <ListItemText
          primary={`D-${index + 1} 김병수(2023.07.33)`}
          sx={{ color: 'text.primary' }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export const SentLetters = () => {
  return (
    <Container fixed sx={{ padding: 0, color: 'white' }}>
      <h3>내가 보낸 편지들</h3>
      <Box sx={{ width: '100%', height: 140, bgcolor: '#cfe8fc' }}>
        <FixedSizeList height={140} fullWidth itemSize={28} itemCount={10} overscanCount={5}>
          {renderRow}
        </FixedSizeList>
      </Box>
    </Container>
  );
};
