import type { NextPage } from 'next';

import { Cake } from 'component/auth/cake';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const SignIn: NextPage = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return !isSSR ? (
    <div>
      <TopDiv>
        <Cake />
      </TopDiv>
    </div>
  ) : (
    // TODO: add loading page
    <div>
      <p>loading</p>
    </div>
  );
};

const TopDiv = styled.p`
  margin-top: 198px;
`;

export default SignIn;
