import React from 'react';
import { ShareIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { ButtonBase, Typography } from '@mui/material';

//TODO: 상태에 따라 action과 css 와 활성화 여부가 달라지는 버튼
type ReadButtonProps = {
  isBeforeBirthday: boolean;
};

export const ReadButton: React.FC<ReadButtonProps> = ({ isBeforeBirthday }) => {
  let message: string;
  let icon: React.ReactNode;

  if (isBeforeBirthday) {
    message = `공유하기`;
    icon = <ShareIcon width={25} />;
  } else {
    message = `편지 읽기`;
    icon = <EnvelopeIcon width={25} />;
  }

  return (
    <ButtonBase sx={readButtonStyle}>
      {icon}
      <Typography sx={{ fontFamily: 'NanumSquareNeo' }}>{message}</Typography>
    </ButtonBase>
  );
};

const readButtonStyle = {
  position: 'absolute',
  bottom: '2%',
  width: '90%',
  height: '57px',
  margin: '5%',
  color: '#FFF',
  background: 'rgba(217, 217, 217, 0.069)',
  border: '2px solid rgba(255, 255, 255, 0.5)',
  borderRadius: '17px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    background: 'rgba(72, 72, 72, 0.2)',
    transition: '0.2s',
  },
};
export default ReadButton;
