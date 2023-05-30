import React from 'react';
import styled from 'styled-components';

export const SentLetters = () => {
  return (
    <SentLettersContainer>
      <h2>내가 보낸 편지들</h2>
    </SentLettersContainer>
  );
};

const SentLettersContainer = styled.div`
  width: 100%;
  background: orange;
`;
