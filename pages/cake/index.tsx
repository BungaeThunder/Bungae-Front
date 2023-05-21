import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { AddLetterButton } from 'component/cake/AddLetterButton';
import { Sidebar } from 'component/common/Sidebar';
import { MyPageModal } from 'component';
import { DdayCounter } from 'component/cake/DdayCounter';
import { AnimatedImg } from 'component/cake/AnimatedImg';
import UserStore from 'store/UserStore';
import { observer } from 'mobx-react';
import { getNaverProfile } from 'component/auth/LoginWithNaver';

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
  const dateInfo = dDayCount(new Date('2023-01-01'));

  const openMypageModal = () => {
    setIsModalOpen(true);
  };

  const closeMypageModal = () => {
    setIsModalOpen(false);
  };

  const handleNaverLogin = async () => {
    if (
      window.location.href.includes('naver_login') &&
      window.location.href.includes('access_token')
    ) {
      const accessToken = window.location.href.split('=')[2].split('&')[0];
      const naverProfile = await getNaverProfile(accessToken);
      const { id, name, birthday } = naverProfile;

      UserStore.setId(id);
      UserStore.setName(name);
      UserStore.setBirthday(birthday);
    }
  };

  useEffect(() => {
    setIsSSR(false);
    handleNaverLogin();
  }, []);

  console.log('isModalOpen : ', isModalOpen);
  return !isSSR ? (
    <div>
      <Header>
        <DdayCounter isBeforeBirthday={dateInfo.isBeforeBirthday} dateDiff={dateInfo.dateDiff} />
        <Sidebar />
      </Header>
      <GlobalStyle />
      <AnimatedImg />
      <main>
        <div>
          <AddLetterButton
            isBeforeBirthday={dateInfo.isBeforeBirthday}
            openMypageModal={openMypageModal}
          />
          <div>Id: {UserStore.id} </div>
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
  padding: 20px 20px 10px 20px;
  z-index: 10;
`;

export default observer(Cake);
