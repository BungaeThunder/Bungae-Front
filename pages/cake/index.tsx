import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { AddLetterButton } from 'component/cake/AddLetterButton';
import { Sidebar } from 'component/common/Sidebar';
import { MyPageModal, withCakeBackgroundStyle } from 'component';
import { DdayCounter } from 'component/cake/DdayCounter';
import { AnimatedImg } from 'component/cake/AnimatedImg';

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

  useEffect(() => {
    setIsSSR(false);
  }, []);

  console.log('isModalOpen : ', isModalOpen);
  return !isSSR ? (
    <div>
      <Header>
        <DdayCounter isBeforeBirthday={dateInfo.isBeforeBirthday} dateDiff={dateInfo.dateDiff} />
        <Sidebar />
      </Header>
      <AnimatedImg />
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
  padding: 20px 20px 10px 20px;
  z-index: 10;
`;

export default withCakeBackgroundStyle(Cake);
