import React from 'react';
import { Box, Container, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import CommentIcon from '@mui/icons-material/Comment';

const boxStyle = { width: '100%', height: 140, bgcolor: '#cfe8fc' };
const listItemTextStyle = { color: 'text.primary' };

const renderRow = (props: ListChildComponentProps) => {
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
        <ListItemText primary={`No.${index + 1}: 김병수 (2021.03.33)`} sx={listItemTextStyle} />
      </ListItemButton>
    </ListItem>
  );
};

export const ReceivedLetters = () => {
  return (
    <Container fixed sx={{ padding: 0, color: 'white' }}>
      <h3>내가 받은 답장들</h3>
      <Box sx={boxStyle}>
        <FixedSizeList height={140} width={'100%'} itemSize={28} itemCount={10} overscanCount={5}>
          {renderRow}
        </FixedSizeList>
      </Box>
    </Container>
  );
};
