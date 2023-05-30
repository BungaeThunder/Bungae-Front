import React from 'react';
import styled from 'styled-components';

export const ReceivedLetters = () => {
  return (
    <ReceivedLetterContainer>
      <h3>내가 받은 답장들</h3>
    </ReceivedLetterContainer>
  );
};

const ReceivedLetterContainer = styled.div`
  width: 100%;
  background: green;
`;
