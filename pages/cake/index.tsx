import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { AddLetterButton } from 'component/cake/AddLetterButton';
import { Sidebar } from 'component/common/Sidebar';
import { MyPageModal } from 'component';
import { DdayCounter } from 'component/cake/DdayCounter';
import { AnimatedImg } from 'component/cake/AnimatedImg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    background-image: url("/images/room_night.png");
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-repeat: no-repeat;
  }
`;

const dDayCount = (birthDay: Date) => {
  const now = new Date();

  const todayStr = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
  const birthDayStr =
    birthDay.getFullYear() + '-' + (birthDay.getMonth() + 1) + '-' + birthDay.getDate();

  const todayDate = new Date(todayStr);
  const birthDayDate = new Date(birthDayStr);

  const dateDiff = Math.floor(
    Math.abs((birthDayDate.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24)),
  );
  const isBeforeBirthday = birthDayDate >= todayDate;
  const dateCount = isBeforeBirthday ? '-' + dateDiff : '+' + dateDiff;

  return { todayStr, birthDayStr, dateCount, isBeforeBirthday, dateDiff };
};

const Cake: NextPage = () => {
  const [isSSR, setIsSSR] = useState<boolean>(true);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dateInfo = dDayCount(new Date('2022-12-25'));

  const openMypageModal = () => {
    setIsModalOpen(true);
  };

  const closeMypageModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsSSR(false);
  }, []);

  console.log('isModalOpen : ', isModalOpen);
  // 위에 dday 간판과 사이드바 버튼을 header 로 빼서 적용?
  // header에 z index 지정해놓고, 그림들 묶어서 부모에 absolute를 주고 zindex낮추니까 겹치는 문제 사라짐
  return !isSSR ? (
    <div>
      <Header>
        <DdayCounter isBeforeBirthday={dateInfo.isBeforeBirthday} dateDiff={dateInfo.dateDiff} />
        <Sidebar />
      </Header>
      {/* <Sidebar /> */}
      <GlobalStyle />
      <AnimatedImg />
      {/* <LightRadioImg src="images/light_radio.png" /> */}
      {/* <LightCandleImg src="images/light_candle.png" /> */}
      <main>
        <div>
          <AddLetterButton
            isBeforeBirthday={dateInfo.isBeforeBirthday}
            openMypageModal={openMypageModal}
          />
        </div>
        <MyPageModal isModalOpen={isModalOpen} closeModal={closeMypageModal} />
      </main>
    </div>
  ) : (
    // TODO: add loading page
    <div>
      <p>loading...</p>
    </div>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px 20px 10px 20px;
  z-index: 10;
`;

export default Cake;
