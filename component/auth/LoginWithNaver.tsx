import LoginWithNaverIcon from 'public/images/auth/login_with_naver_account.svg';
import StyledLoginButton from './StyledLoginButton';

const LoginWithNaver = () => {
  const callNaverLoginApi = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/signUp/naver`);
    } catch (error) {}
  };

  return (
    <>
      <StyledLoginButton onClick={callNaverLoginApi}>
        <LoginWithNaverIcon />
      </StyledLoginButton>
    </>
  );
};

export default LoginWithNaver;
