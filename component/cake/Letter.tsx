import React from 'react';
import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material';

interface LetterProps {
  isOpen: boolean;
  message: string;
  close: () => void;
}

export const Letter = ({ isOpen, message, close }: LetterProps) => {
  return (
    <Box
      sx={{
        width: '65%',
        height: '100%',
        backgroundColor: 'beige',
        borderRadius: '10px',
        border: '1px solid white',
        marginRight: 'auto',
        marginLeft: 'auto',
        p: 1,
      }}
    >
      {isOpen ? (
        <>
          <TextField fullWidth multiline rows={20} label="fullWidth" id="fullWidth" />
          <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
            <Button onClick={close}>취소</Button>
            <Button>저장</Button>
          </ButtonGroup>
        </>
      ) : (
        <Typography>{message}</Typography>
      )}
    </Box>
  );
};

export default Letter;
