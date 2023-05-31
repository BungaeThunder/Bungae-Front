import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import BackgroundContainer from 'component/cake/BackgroundContainer';
import MenuButton from 'component/cake/MenuButton';
import WelcomeTitle from 'component/cake/WelcomeTitle';
import ReadButton from 'component/cake/ReadButton';
import WriteButton from 'component/cake/WriteButton';

const Cake: NextPage = () => {
  const [isSSR, setIsSSR] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userName = '예은';
  const dDayCount = 0;
  const isOwner = false;

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return !isSSR ? (
    <BackgroundContainer>
      <WelcomeTitle
        isBirthDay={Boolean(dDayCount == 0)}
        userName={userName}
        dDayCount={dDayCount}
      ></WelcomeTitle>
      <MenuButton open={isMenuOpen} setOpen={setIsMenuOpen} />
      {isOwner ? (
        <ReadButton isBeforBirthday={false}></ReadButton>
      ) : (
        <WriteButton isBeforBirthday={false} isLetterWritten={true}></WriteButton>
      )}
    </BackgroundContainer>
  ) : (
    // TODO: add loading page
    <div>
      <p>loading...</p>
    </div>
  );
};

export default Cake;
