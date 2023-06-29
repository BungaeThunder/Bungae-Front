import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}
// TODO: 상태값 받아서 다양한 배경화면 적용(낮, 밤, 생일 전-후-당일)

const Background: React.FC<Props> = ({ children }) => {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

const BackgroundContainer = styled.div`
  height: 100vh;
  background-image: url(${props => props.theme.files.backgroundRoom});
  background-repeat: repeat-x;
`;

export default Background;
