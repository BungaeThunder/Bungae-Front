import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import SidebarIcon from 'public/images/button/sidebar_button.svg';
import ProfileIcon from 'public/images/button/sidebar_button.svg';
import LetterIcon from 'public/images/button/letter.svg';
import LetterDoneIcon from 'public/images/button/letter_done.svg';
import SupportIcon from 'public/images/button/support_us_button.svg';

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
      <SidebarButtonSpan ref={sideBtn} onClick={() => setIsSidebarOpen(true)}>
        <SidebarIcon />
      </SidebarButtonSpan>
      <ContainerDiv ref={side} isMenuOpen={isSidebarOpen}>
        <ContentDiv>
          <MyInfoTextDiv>
            Hello, Lenini <br /> Happy Unbirthday!
          </MyInfoTextDiv>
          <ProfileIcon />
        </ContentDiv>
        {/* GO TO MY SESSION */}
        <ContentDiv>
          <GoToMySessionDiv>{/* 배경 이미지 넣어야 함 */}</GoToMySessionDiv>
        </ContentDiv>
        {/* 작성한 편지 */}
        <ContentDiv>
          <p>작성한 편지</p>
          <div>
            {/* 서버 작업 후 반복문으로, 리스트 정렬 기준 필요, DB에 편지 다 쓴 상태에 대한 필드 추가 필요 */}
            <LetterContainerDiv background={'#FF6262'}>
              <LetterDiv>
                <LetterDoneIcon />
                <LetterTextSpan>hihih monday</LetterTextSpan>
              </LetterDiv>
            </LetterContainerDiv>
            <LetterContainerDiv background={'#FF9797'}>
              <LetterDiv>
                <LetterDoneIcon />
                <LetterTextSpan>hihih dskljad</LetterTextSpan>
              </LetterDiv>
            </LetterContainerDiv>
            <LetterContainerDiv background={'#FFC3C3'}>
              <LetterDiv>
                <LetterDoneIcon />
                <LetterTextSpan>hihih kwkwho</LetterTextSpan>
              </LetterDiv>
            </LetterContainerDiv>
            <LetterContainerDiv background={'#F1F1F1'}>
              <LetterDiv>
                <LetterIcon />
                <LetterTextSpan>hihih kwkwho</LetterTextSpan>
              </LetterDiv>
            </LetterContainerDiv>
            <LetterContainerDiv background={'#F1F1F1'}>
              <LetterDiv>
                <LetterIcon />
                <LetterTextSpan>hihih kwkwho</LetterTextSpan>
              </LetterDiv>
            </LetterContainerDiv>
            <LetterContainerDiv background={'#F1F1F1'}>
              <LetterDiv>
                <LetterIcon />
                <LetterTextSpan>hihih kwkwho</LetterTextSpan>
              </LetterDiv>
            </LetterContainerDiv>
          </div>
        </ContentDiv>
        {/* SUPPORT US */}
        <ContentDiv>
          <SupportUsContainerDiv>
            <SupportIcon />
          </SupportUsContainerDiv>
        </ContentDiv>
        {/* AD */}
        <ContentDiv>
          <AdDiv>AD</AdDiv>
        </ContentDiv>
      </ContainerDiv>
    </div>
  );
};

const SidebarButtonSpan = styled.span`
  padding: 3%;
  display: flex;
  flex-direction: row-reverse;
`;

const ContainerDiv = styled.div<{ isMenuOpen: boolean }>`
  position: absolute;
  width: 260px;
  height: 100%;
  top: 0;
  right: -300px;
  -webkit-transform: ${props => (props.isMenuOpen ? 'translateX(-300px)' : 'translateX(0)')};
  transform: ${props => (props.isMenuOpen ? 'translateX(-300px)' : 'translateX(0)')};
  -webkit-transition: 0.3s ease all;
  transition: 0.3s ease all;
  background: white;
  z-index: 999;
  padding: 20px;
`;

const MyInfoTextDiv = styled.div`
  width: 70%;
  height: 60px;
  float: left;
  padding-top: 10px;
`;

const ContentDiv = styled.div`
  margin-bottom: 30px;
`;

const GoToMySessionDiv = styled.div`
  border-radius: 20px;
  background: #d9d9d9;
  width: 100%;
  height: 160px;
`;

const LetterContainerDiv = styled.div<{ background: string }>`
  border-radius: 10px;
  border: 2px solid white;
  width: 95%;
  height: 35px;
  background: ${props => props.background};
  padding: 5px;
  margin-bottom: 5px;
`;

const LetterDiv = styled.div`
  display: table;
`;

const LetterTextSpan = styled.span`
  display: table-cell;
  vertical-align: middle;
`;

const SupportUsContainerDiv = styled.div`
  padding-left: 3%;
`;

const AdDiv = styled.div`
  background: #d0d0d0;
  width: 100%;
  height: 60px;
  text-align: center;
  align-items: center;
`;
