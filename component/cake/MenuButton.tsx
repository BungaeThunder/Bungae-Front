import React from 'react';
import styled from 'styled-components';

type MenuButtonProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuButton: React.FC<MenuButtonProps> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;
  top: 2%;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.7rem;
  height: 1.7rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  overflow-x: hidden;

  span {
    width: 100%;
    height: 0.2rem;
    background: ${({ theme, open }) => (open ? theme.primaryDark : theme.primaryLight)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background: white;
    :first-child {
      transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${props => (props.open ? '0' : '1')};
      transform: ${props => (props.open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default MenuButton;
