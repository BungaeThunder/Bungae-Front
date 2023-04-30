import React from 'react';
import styled from 'styled-components';

type WelcomeTitleProps = {
  userName: string;
  isBirthDay: boolean;
  dDayCount: number;
};
export const WelcomeTitle: React.FC<WelcomeTitleProps> = ({ userName, isBirthDay, dDayCount }) => {
  const welcomeMessage = isBirthDay ? 'Happy Birthday!' : 'Happy Unbirthday!';
  let message: string;
  if (dDayCount < 0) {
    message = `🧁 당신의 생일까지 d-${-dDayCount}`;
  } else if (dDayCount === 0) {
    message = `🧁 D-day 생일을 축하합니다!`;
  } else {
    message = `🧁 초에 불이 꺼진지 ${dDayCount}일 째`;
  }
  return (
    <Container>
      <Main>
        <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
        <UserName>{userName}님❤️</UserName>
      </Main>
      <Sub>{message}</Sub>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  padding-top: 3%;
  padding-left: 3%;
`;

const Main = styled.div`
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Sub = styled.div`
  padding-top: 1%;
  font-family: 'NanumSquareNeo';
  font-size: 0.8rem;
  color: ${props => props.theme.colors.white};
  float: left;
`;

const WelcomeMessage = styled.div`
  font-family: 'Poetsen One Regular';
  font-weight: 400;
  font-size: 1.3rem;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
  color: white;
  background: -webkit-linear-gradient(180deg, #fc4062 0%, #c5a2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-stroke: 2px transparent;
  display: inline-block;
`;

const UserName = styled.div`
  font-family: 'NanumSquareNeo';
  font-size: 0.9rem;
  padding-left: 5px;

  display: inline-block;
`;

export default WelcomeTitle;
