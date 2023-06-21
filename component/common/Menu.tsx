import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { BasicInfo } from 'component/common/BasicInfo';
import { LastCake } from 'component/common/LastCake';
import { SentLetters } from 'component/common/SentLetters';
import { ReceivedLetters } from 'component/common/ReceivedLetters';
import { LogoutButton } from 'component/common/LogoutButton';

const containerStyle = {
  bgcolor: '#334458',
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: '888',
  top: '0%',
  padding: '5%',
};

type MenuProps = {
  open: boolean;
  userName: string;
};

export const Menu: React.FC<MenuProps> = ({ open, userName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    setIsMenuOpen(open);
  });

  return isMenuOpen ? (
    <Container sx={containerStyle}>
      <BasicInfo userName={userName} />
      <LastCake />
      <SentLetters />
      <ReceivedLetters />
      <LogoutButton />
    </Container>
  ) : (
    <div></div>
  );
};
