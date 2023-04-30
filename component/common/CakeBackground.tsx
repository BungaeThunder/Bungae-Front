import { createGlobalStyle } from 'styled-components';
import React from 'react';

const CakeBackgroundStyle = createGlobalStyle`
  body {
    margin: 0px;
    background-image: url("/images/room_night.png");
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-repeat: no-repeat;
  }
`;

// eslint-disable-next-line react/display-name
export const withCakeBackgroundStyle =
  <P extends object>(Component: React.ComponentType<P>) =>
  (props: React.PropsWithChildren<P>) => {
    return (
      <>
        <CakeBackgroundStyle />
        <Component {...props} />
      </>
    );
  };
