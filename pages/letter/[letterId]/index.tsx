import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ReadLetter: NextPage = () => {
  const [isSSR, setIsSSR] = useState<boolean>(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return !isSSR ? (
    <div>
      <Header>
        <text>11</text>
        <text>22</text>
      </Header>
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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 10px 20px;
  z-index: 10;
`;

export default ReadLetter;
