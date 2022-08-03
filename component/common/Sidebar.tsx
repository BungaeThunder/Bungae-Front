import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const imgPath = '/images/button/sidebar-button.svg';

  const side = useRef<HTMLInputElement>(null);
  const sideBtn = useRef<HTMLInputElement>(null);

  const handleClose = event => {
    const sideChildren = side.current?.contains(event.target);
    const sideBtnChildren = sideBtn.current?.contains(event.target);

    if (!sideChildren && isMenuOpen) {
      setIsMenuOpen(false);
    }

    !!sideBtnChildren && setIsMenuOpen(true);
  };

  useEffect(() => {
    isMenuOpen && window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  });

  return (
    <div>
      <Button ref={sideBtn} onClick={() => setIsMenuOpen(true)}>
        <Image src={imgPath} alt="sidebar button" width={55} height={55} />
      </Button>
      <Container ref={side} isMenuOpen={isMenuOpen}>
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

const Container = styled.div<{ isMenuOpen: boolean }>`
  position: absolute;
  width: 330px;
  height: 100%;
  top: 0;
  right: -330px;
  -webkit-transform: ${props => (props.isMenuOpen ? 'translateX(-330px)' : 'translateX(0)')};
  transform: ${props => (props.isMenuOpen ? 'translateX(-330px)' : 'translateX(0)')};
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

const Button = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 55px;
`;

const Content = styled.div`
  background: blueviolet;
`;
