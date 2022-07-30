import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const imgPath = '/images/button/sidebar-button.png';

  const side = useRef<HTMLInputElement>(null);
  const sideBtn = useRef<HTMLInputElement>(null);

  const handleClose = e => {
    const sideChildren = side.current?.contains(e.target);
    const sideBtnChildren = sideBtn.current?.contains(e.target);

    if ((!sideChildren) && isMenuOpen) {
      setIsMenuOpen(false);
    }

    !!sideBtnChildren && setIsMenuOpen(true)
  };

  useEffect(() => {
    isMenuOpen && window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, [isMenuOpen]);

  return (
    <div>
      <Button ref={sideBtn} onClick={() => setIsMenuOpen(true)}>
        <Image src={imgPath} alt="sidebar button" width={40} height={40} />
      </Button>
      <Container ref={side} isMenuOpen={isMenuOpen}>
        <Top>
          <p>Hello, Lenini</p>
          <Button onClick={() => setIsMenuOpen(false)}>
            <Image src={imgPath} alt="sidebar button" width={40} height={40} />
          </Button>
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

const Container = styled.div<{ isMenuOpen: boolean }>`
  width: 200px;
  height: 100%;
  position: absolute;
  top: 0;
  right: -200px;
  -webkit-transform: ${props => (props.isMenuOpen ? 'translateX(-200px)' : 'translateX(0)')};
  transform: ${props => (props.isMenuOpen ? 'translateX(-200px)' : 'translateX(0)')};
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

const Button = styled.span`
  top: 10px;
  right: 10px;
  position: absolute;
`;

const Content = styled.div`
  background: blueviolet;
`;
