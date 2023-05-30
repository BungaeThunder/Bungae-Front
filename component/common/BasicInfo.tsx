import React from 'react';
import styled from 'styled-components';

type BasicInfoProps = {
  userName: string;
};

export const BasicInfo: React.FC<BasicInfoProps> = ({ userName }) => {
  console.log('@BasicInfo: ' + userName);
  return (
    <BasicInfoContainer>
      <h2>{userName}님</h2>
      <h3>당신의 생일은 13월 57일 입니다.</h3>
    </BasicInfoContainer>
  );
};

const BasicInfoContainer = styled.div`
  width: 100%;
  background: red;
`;
