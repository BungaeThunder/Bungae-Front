import React, { useState } from 'react';
import { Box, ButtonBase } from '@mui/material';

//assets
import Image from 'next/image';
import Letter from './Letter';

//TODO: 상태에 따라 action과 css 와 활성화 여부가 달라지는 버튼
type WriteButtonProps = {
  isLetterWritten: boolean;
};

export const WriteButton: React.FC<WriteButtonProps> = ({ isLetterWritten }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLetterClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ButtonBase
        sx={{
          position: 'absolute',
          bottom: '0%',
          width: '100%',
          height: '20%',
          overflowY: 'hidden',
        }}
        disableRipple
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleLetterClick}
      >
        <Box sx={{ position: 'absolute', width: '80%', top: '-70%' }}>
          <Image
            src={'/images/letter/envelop_back.svg'}
            alt="envelop_back"
            width={500}
            height={800}
          />
        </Box>
        <Box sx={{ position: 'relative', top: '38%', width: '83%', zIndex: 100 }}>
          <Image
            src={'/images/letter/envelop_front.svg'}
            alt="envelop_back"
            width={500}
            height={800}
          />
        </Box>
      </ButtonBase>
      <Box
        sx={{
          position: 'absolute',
          top: isOpen ? '15%' : isHovered ? '84%' : '85%',
          width: '100%',
          height: isOpen ? '70%' : '13%',
          transition: 'all 0.2s ease',
          zIndex: isOpen ? 200 : 10,
        }}
      >
        <Letter
          isOpen={isOpen}
          message={isLetterWritten ? `내가 쓴 편지 보기` : `편지 쓰기`}
          close={handleLetterClick}
        />
      </Box>
    </>
  );
};

export default WriteButton;
