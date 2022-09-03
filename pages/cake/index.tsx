import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { AddLetterButton } from 'component/cake/AddLetterButton';
import { Sidebar } from 'component/common/Sidebar';
import { MyPageModal } from 'component';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    background-image: url("/images/portalCake.jpg");
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

  const dateDiff = Math.abs((birthDayDate.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24));
  const isBeforeBirthday = birthDayDate > todayDate;
  const dateCount = isBeforeBirthday ? '-' + Math.floor(dateDiff) : '+' + Math.floor(dateDiff);

  return { todayStr, birthDayStr, dateCount, isBeforeBirthday };
};

const Cake: NextPage = () => {
  const [isSSR, setIsSSR] = useState<boolean>(true);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dateInfo = dDayCount(new Date('2022-12-25'));
  // TODO: dday 간판 작성
  console.log(dateInfo);

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

  return !isSSR ? (
    <div>
      <Sidebar />
      <GlobalStyle />
      <main>
        <BirthdayInfo>
          <p>Today:{dateInfo.todayStr}</p>
          <p>Bday:{dateInfo.birthDayStr}</p>
          <p> D{dateInfo.dateCount}</p>
        </BirthdayInfo>
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
const BirthdayInfo = styled.div`
  color: white;
`;

export default Cake;
