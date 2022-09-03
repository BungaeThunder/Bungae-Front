import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

// TODO: 절대경로로 바꾸기
import { AddLetterButton } from 'component/cake/AddLetterButton';
import styled, { createGlobalStyle } from 'styled-components';
import { Sidebar } from '../../component/common/Sidebar';

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

function dDayCount(birthDay: Date) {
  const now = new Date();

  const todayStr = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
  const birthDayStr =
    birthDay.getFullYear() + '-' + (birthDay.getMonth() + 1) + '-' + birthDay.getDate();

  const todayDate = new Date(todayStr);
  const birthDayDate = new Date(birthDayStr);

  const dateDiff = Math.abs((birthDayDate.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24));
  const isBeforeBday = birthDayDate > todayDate;
  const dateCount = isBeforeBday ? '-' + Math.floor(dateDiff) : '+' + Math.floor(dateDiff);

  return { todayStr, birthDayStr, dateCount, isBeforeBday };
}

const Cake: NextPage = () => {
  const [isSSR, setIsSSR] = useState(true);
  const dateInfo = dDayCount(new Date('2022-12-25'));
  console.log(dateInfo);
  useEffect(() => {
    setIsSSR(false);
  }, []);

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
          <AddLetterButton isBeforeBday={dateInfo.isBeforeBday} />
        </div>
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
