import Script from 'next/script';
import LoginWithKakaoIcon from 'public/images/auth/login_with_kakao_account.svg';
import StyledLoginButton from './StyledLoginButton';

const LoginWithKakao = () => {
  const initLogin = () => {
    const kakao = window.Kakao;

    kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
  };

  const handleClick = () => {
    const kakao = window.Kakao;

    kakao.Auth.authorize({ redirectUri: `${process.env.NEXT_PUBLIC_SERVER_URL}/cake` });
  };

  return (
    <>
      <Script src="/sdk/kakaologin_sdk_1.43.0.js" strategy="lazyOnload" onLoad={initLogin} />
      <StyledLoginButton onClick={handleClick}>
        <LoginWithKakaoIcon />
      </StyledLoginButton>
    </>
  );
};

export default LoginWithKakao;
