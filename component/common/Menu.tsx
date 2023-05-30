import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BasicInfo } from 'component/common/BasicInfo';
import { LastCake } from 'component/common/LastCake';
import { SentLetters } from 'component/common/SentLetters';
import { ReceivedLetters } from 'component/common/ReceivedLetters';

type MenuProps = {
  open: boolean;
  userName: string;
};

export const Menu: React.FC<MenuProps> = ({ open, userName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    setIsMenuOpen(open);
  });

  console.log('@menu: isMenuOpen: ' + isMenuOpen);
  console.log('@menu: userName: ' + userName);

  return !isMenuOpen ? (
    <div> </div>
  ) : (
    <MenuContainer>
      <BasicInfo userName={userName} />
      <LastCake />
      <SentLetters />
      <ReceivedLetters />
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  color: black;
  background: #334458;
  top: 0%;
  position: absolute;
  // display: flex;
  z-index: 888;
  width: 100%;
  height: 100%;
  padding: 5%;
`;
