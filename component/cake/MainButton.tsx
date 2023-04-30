import React from 'react';
import styled from 'styled-components';
import { ShareIcon, EnvelopeIcon, PencilIcon } from '@heroicons/react/24/outline';

//TODO: 상태에 따라 action과 css 와 활성화 여부가 달라지는 버튼
type MainButtonProps = {
  isOwner: boolean;
  isBeforBirthday: boolean;
  isLetterWritten: boolean;
};

export const MainButton: React.FC<MainButtonProps> = ({
  isOwner,
  isBeforBirthday,
  isLetterWritten,
}) => {
  let message: string;
  let icon: React.ReactNode;
  if (isOwner) {
    if (isBeforBirthday) {
      message = `공유하기`;
      icon = <ShareIcon width={25} />;
    } else {
      message = `편지 읽기`;
      icon = <EnvelopeIcon width={25} />;
    }
  } else {
    icon = <PencilIcon width={25} />;
    if (isLetterWritten) {
      message = `내가 쓴 편지 보기`;
    } else {
      message = `편지 쓰기`;
    }
  }

  return (
    <Container>
      <Label>
        {icon}
        <p>{message}</p>
      </Label>
    </Container>
  );
};
const Label = styled.div`
  width: 100%;
  font-family: 'NanumSquareNeo';
  font-size: medium;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    padding: 7px;
  }
`;

const Container = styled.div`
  position: absolute;
  bottom: 2%;
  width: 90%;
  height: 57px;
  margin: 5%;
  color: ${props => props.theme.colors.white};
  background: rgba(217, 217, 217, 0.069);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background: rgba(72, 72, 72, 0.2);
    transition: 0.2s;
  }
  :active {
    background: rgba(225, 225, 225, 0.25);
  }
`;

export default MainButton;
