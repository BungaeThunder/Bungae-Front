import React from 'react';
import { ShareIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { ButtonBase, Typography } from '@mui/material';

//assets

//TODO: 상태에 따라 action과 css 와 활성화 여부가 달라지는 버튼
type ReadButtonProps = {
  isBeforBirthday: boolean;
};

export const ReadButton: React.FC<ReadButtonProps> = ({ isBeforBirthday }) => {
  let message: string;
  let icon: React.ReactNode;

  if (isBeforBirthday) {
    message = `공유하기`;
    icon = <ShareIcon width={25} />;
  } else {
    message = `편지 읽기`;
    icon = <EnvelopeIcon width={25} />;
  }

  return (
    <ButtonBase
      sx={{
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
      }}
    >
      {icon}
      <Typography sx={{ fontFamily: 'NanumSquareNeo' }}>{message}</Typography>
    </ButtonBase>
  );

  // return (
  //   <Container>
  //     <Label>
  //       {icon}
  //       <p>{message}</p>
  //     </Label>
  //   </Container>
  // );
};

export default ReadButton;
