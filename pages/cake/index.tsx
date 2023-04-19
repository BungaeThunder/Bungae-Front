import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import BackgroundContainer from 'component/cake/BackgroundContainer';
import { CakeHeader } from 'component/common/CakeHeader';

const Cake: NextPage = () => {
  const [isSSR, setIsSSR] = useState<boolean>(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  return !isSSR ? (
    <BackgroundContainer>
      <CakeHeader userName={'jeong'} dDay={22}></CakeHeader>
    </BackgroundContainer>
  ) : (
    // TODO: add loading page
    <div>
      <p>loading...</p>
    </div>
  );
};

export default Cake;
