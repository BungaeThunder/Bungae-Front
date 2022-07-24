import { useReducer } from 'react';
import styled from 'styled-components';

function toggleMenu(isMenuOpen: boolean) {
  return !isMenuOpen;
}

export const Sidebar = () => {
  const [isMenuOpen, dispatch] = useReducer(toggleMenu, false);

  const imgPath = './images/button/sidebar-button.png';

  return (
    <div>
      <Button onClick={() => dispatch()}>
        <img src={imgPath} width="40px" />
      </Button>
      <Container isMenuOpen={isMenuOpen}>
        <Button onClick={() => dispatch()}>
          <img src={imgPath} width="40px" />
        </Button>
        <Content>
          <ul>
            <li>New Item</li>
            <li>New Item</li>
            <li>New Item</li>
          </ul>
        </Content>
      </Container>
    </div>
  );
};

const Container = styled.div<{ isMenuOpen: boolean }>`
  width: 200px;
  height: 100%;
  position: absolute;
  top: 0;
  right: -200px;
  -webkit-transform: ${props => (props.isMenuOpen ? 'translateX(0)' : 'translateX(-200px)')};
  transform: ${props => (props.isMenuOpen ? 'translateX(0)' : 'translateX(-200px)')};
  -webkit-transition: 0.3s ease all;
  transition: 0.3s ease all;
  background: ${props => (props.isMenuOpen ? 'red' : 'yellowgreen')};
  z-index: 100;
`;

const Button = styled.span`
  top: 10px;
  right: 10px;
  position: absolute;
`;

const Content = styled.div`
  background: blueviolet;
  position: relative;
  top: 60px;
`;
