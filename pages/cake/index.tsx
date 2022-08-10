import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

// TODO: 절대경로로 바꾸기
import { AddLetterButton } from 'component/cake/AddLetterButton';
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

function dDayCount(birthDay: Date) {
  const now = new Date();

  const Today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
  const Bday = birthDay.getFullYear() + '-' + (birthDay.getMonth() + 1) + '-' + birthDay.getDate();
  const BirthdayDate = new Date(Bday);
  const TodayDate = new Date(Today);
  const dateDiff = Math.abs((BirthdayDate.getTime() - TodayDate.getTime()) / (1000 * 60 * 60 * 24));
  const beforeBday = BirthdayDate > TodayDate;
  const dateCount = beforeBday ? '-' + Math.floor(dateDiff) : '+' + Math.floor(dateDiff);

  return { Today, Bday, dateCount, beforeBday };
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
      <GlobalStyle />
      <main>
        <BirthdayInfo>
          <p>Today:{dateInfo.Today}</p>
          <p>Bday:{dateInfo.Bday}</p>
          <p> D{dateInfo.dateCount}</p>
        </BirthdayInfo>
        <div>
          <AddLetterButton beforeBday={dateInfo.beforeBday} />
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
