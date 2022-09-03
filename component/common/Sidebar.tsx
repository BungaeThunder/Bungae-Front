import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import SidebarIcon from 'public/images/button/sidebar-button.svg';

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const side = useRef<HTMLInputElement>(null);
  const sideBtn = useRef<HTMLInputElement>(null);

  const handleClose = (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    const sideChildren = side.current?.contains(target);
    const sideBtnChildren = sideBtn.current?.firstChild?.contains(target);

    // 사이드바 열린 상태에서 사이드바 버튼 외부영역을 누르면, 사이드바를 닫는다.
    isSidebarOpen && !sideChildren && setIsSidebarOpen(false);

    // 사이드바 버튼을 누르면 사이드바를 오픈한다.
    !!sideBtnChildren && setIsSidebarOpen(true);
  };

  useEffect(() => {
    isSidebarOpen && window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  });

  return (
    <div>
      <Button ref={sideBtn} onClick={() => setIsSidebarOpen(true)}>
        <SidebarIcon />
      </Button>
      <Container ref={side} isMenuOpen={isSidebarOpen}>
        <Top>
          <p>Hello, Lenini</p>
        </Top>
        <div>
          <p>내 케이크 보기</p>
        </div>
        <Content>
          <p>알림</p>
          <ul>
            <li>새로운 편지가 도착했어요. 18:30</li>
            <li>새로운 편지가 도착했어요. 18:10</li>
            <li>Selini님의 답장이 도착했어요. 17:28</li>
          </ul>
        </Content>
        <div>
          <p>후원 배너</p>
        </div>
        <Content>
          <p>작성 중이던 편지</p>
          <ul>
            <li>To. Bnini</li>
            <li>To. Chonini</li>
            <li>To. Conini</li>
          </ul>
        </Content>
      </Container>
    </div>
  );
};

const Button = styled.span`
  display: flex;
  flex-direction: row-reverse;
`;

const Container = styled.div<{ isMenuOpen: boolean }>`
  position: absolute;
  width: 300px;
  height: 100%;
  top: 0;
  right: -330px;
  -webkit-transform: ${props => (props.isMenuOpen ? 'translateX(-300px)' : 'translateX(0)')};
  transform: ${props => (props.isMenuOpen ? 'translateX(-300px)' : 'translateX(0)')};
  -webkit-transition: 0.3s ease all;
  transition: 0.3s ease all;
  background: ${props => (props.isMenuOpen ? 'yellowgreen' : 'red')};
  z-index: 999;
  padding: 5px;
`;

const Top = styled.div`
  width: 100%;
  height: 60px;
`;

const Content = styled.div`
  background: blueviolet;
`;
