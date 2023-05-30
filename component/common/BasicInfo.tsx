import React from 'react';
import styled from 'styled-components';

type BasicInfoProps = {
  userName: string;
};

export const BasicInfo: React.FC<BasicInfoProps> = ({ userName }) => {
  console.log('@BasicInfo: ' + userName);
  return (
    <BasicInfoContainer>
      <h1>{userName}님</h1>
      <h2>당신의 생일은 13월 57일 입니다.</h2>
    </BasicInfoContainer>
  );
};

const BasicInfoContainer = styled.div`
  width: 100%;
  background: red;
`;
