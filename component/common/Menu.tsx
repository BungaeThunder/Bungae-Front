import { useEffect, useState } from 'react';
import styled from 'styled-components';

type MenuProps = {
  open: boolean;
};

export const Menu: React.FC<MenuProps> = ({ open }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    setIsMenuOpen(open);
  });

  console.log('@menu: isMenuOpen: ' + isMenuOpen);

  return isMenuOpen ? <MenuContainer> </MenuContainer> : <div></div>;
};

const MenuContainer = styled.div`
  color: white;
  background: #334458;
  position: absolute;
  top: 0%;
  display: flex;
  z-index: 888;
  width: 100%;
  height: 100%;
`;
