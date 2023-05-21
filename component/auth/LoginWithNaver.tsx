import { observer } from 'mobx-react';
import Script from 'next/script';
import LoginWithNaverIcon from 'public/images/auth/login_with_naver_account.svg';
import { useRef } from 'react';
import styled from 'styled-components';
import StyledLoginButton from './StyledLoginButton';

export const getNaverProfile = async (accessToken: string) => {
  console.log(`Bearer ${accessToken}`);
  const response = await (
    await fetch('/naver-openapi/v1/nid/me', {
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
    })
  ).json();

  return response.response;
};

const LoginWithNaver = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = () => (ref.current?.children[0] as HTMLElement).click();
  const initLogin = () => {
    const login = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/cake?naver_login=true`,
      callbackHandle: true,
      isPopup: false,
      loginButton: { color: 'white', type: 3, height: 50 },
    });

    login.init();
  };

  return (
    <>
      <Script src="/sdk/naveridlogin_js_sdk_2.0.2.js" strategy="lazyOnload" onLoad={initLogin} />
      <NaverIdLogin ref={ref} id="naverIdLogin" />
      <StyledLoginButton onClick={handleClick}>
        <LoginWithNaverIcon />
      </StyledLoginButton>
    </>
  );
};

const NaverIdLogin = styled.div`
  display: none;
`;

export default observer(LoginWithNaver);
