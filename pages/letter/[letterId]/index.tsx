import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { withCakeBackgroundStyle } from '../../../component';

const ReadLetter: NextPage = () => {
  const [isSSR, setIsSSR] = useState<boolean>(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return !isSSR ? (
    <div>
      {/*<GlobalStyle />*/}
      <main>
        <text>111</text>
      </main>
    </div>
  ) : (
    // TODO: add loading page
    <div>
      <p>loading...</p>
    </div>
  );
};

export default withCakeBackgroundStyle(ReadLetter);
