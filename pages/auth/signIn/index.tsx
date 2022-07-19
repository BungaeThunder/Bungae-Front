import type { NextPage } from 'next';

import { Cake } from 'component/auth/cake';
import styled from 'styled-components';

const SignIn: NextPage = () => {
  return (
    <div>
      <TopDiv>
        <Cake />
      </TopDiv>
    </div>
  );
};

const TopDiv = styled.p`
  margin-top: 198px;
`;

export default SignIn;
