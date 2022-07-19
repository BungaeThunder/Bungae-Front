import styled from 'styled-components';

import { Icon } from '@iconify/react';
import React from 'react';

export const Cake: React.FC = () => {
  return (
    <div>
      <MainText>
        Light on your cakey <br /> with letters from deers
      </MainText>
      <CakeIcon icon="noto-v1:birthday-cake" color="#f8f8f8" />
    </div>
  );
};

const MainText = styled.p`
  font-family: 'Fredoka One';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  text-align: center;

  background: linear-gradient(95.92deg, #fc4062 29.05%, #c5a2fe 74.46%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  linear-gradient(0deg, #FFFFFF, #FFFFFF);
  
  border: 1px solid #ffffff;
`;

const CakeIcon = styled(Icon)`
  width: 128px;
  height: 128px;
  position: absolute;
  left: 50%;
  margin-left: -64px;
  margin-top: 14px;
`;
