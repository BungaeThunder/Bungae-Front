import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundContainer from 'component/cake/BackgroundContainer';
import { SwitchButton } from 'component';
import Image from 'next/image';

const ReadLetter: NextPage = () => {
  const [isSSR, setIsSSR] = useState<boolean>(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const gotoBack = () => {
    console.log('gotoback');
  };

  const offSound = () => {
    console.log('off sound');
  };

  return !isSSR ? (
    <div>
      <p>loading...</p>
    </div>
  ) : (
    <BackgroundContainer>
      <div>
        <Header>
          <div>
            <Image
              src={'/icons/backTriangle.svg'}
              alt="button"
              width={22}
              height={16}
              onClick={gotoBack}
            />
            <Image src={'/icons/lucideCake.svg'} width={28} height={26} />
          </div>
          <SwitchButton />
          <Image src={'/icons/sound.svg'} alt="button" width={28} height={26} onClick={offSound} />
        </Header>
        <LetterMain>
          <Letter>
            <FromText>From 학죽</FromText>
            <MainText>안녕 난 학준이야</MainText>
            <ToText>To 학준</ToText>
            <Bookmark></Bookmark>
          </Letter>
          <WritingPad>
            <Image src={'/images/envelop.svg'} width={317} height={258} />
          </WritingPad>
        </LetterMain>
      </div>
    </BackgroundContainer>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const LetterMain = styled.main`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Letter = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  background-image: url('/images/letter_background.svg');
  background-repeat: no-repeat;
  width: 279px;
  height: 586px;
`;

const FromText = styled.text`
  display: flex;
  margin-top: 48px;
  margin-left: 27px;
`;

const MainText = styled.text`
  display: flex;
  margin-top: 16px;
  margin-left: 27px;
  width: 260px;
  height: 350px;
`;

const ToText = styled.text`
  display: flex;
  margin-left: 186px;
`;

const WritingPad = styled.div`
  display: flex;
  position: relative;
  top: 490px;
  z-index: 0;
`;

const Bookmark = styled.div`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: 70px;
  width: 50px;
  padding: 0px;
  transform: rotate(-90deg) skew(0deg);
  border-left: 25px solid red;
  border-right: 25px solid red;
  border-bottom: 25px solid transparent;
`;

export default ReadLetter;
