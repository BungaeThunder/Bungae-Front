import React from 'react';
import styled from 'styled-components';
import config from 'config';

const BackgroundContainer = styled.div`
  height: 100vh;
  background-image: url(${config.backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

interface Props {
  children: React.ReactNode;
}

const Background: React.FC<Props> = ({ children }) => {
  console.log(config.backgroundImage);
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

export default Background;
