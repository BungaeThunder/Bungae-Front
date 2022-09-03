import type { NextPage } from 'next';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import LoginWithNaver from 'component/auth/LoginWithNaver';
import LoginWithKakao from 'component/auth/LoginWithKakao';

declare global {
  interface Window {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    naver: any;
    Kakao: any;
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }
}

const Auth: NextPage = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return !isSSR ? (
    <TopDiv>
      <MainTextColored>
        Light on your cakey <br /> with letters from dears
      </MainTextColored>
      <CakeIcon icon="noto-v1:birthday-cake" />
      <MainText>Create your cakey by:</MainText>
      <LoginWithNaver />
      <LoginWithKakao />
    </TopDiv>
  ) : (
    // TODO: add loading page
    <div>
      <p>loading</p>
    </div>
  );
};

const TopDiv = styled.div`
  margin-top: 128px;
`;

const MainText = styled.p`
  font-family: 'Fredoka One';
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  text-align: center;

  border: 1px solid #ffffff;
`;

const MainTextColored = styled(MainText)`
  background: linear-gradient(95.92deg, #fc4062 29.05%, #c5a2fe 74.46%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  linear-gradient(0deg, #FFFFFF, #FFFFFF);
`;

const CakeIcon = styled(Icon)`
  width: 128px;
  height: 128px;
  display: block;
  margin: auto;
`;

export default Auth;
