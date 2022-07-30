import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import Line from "public/images/line_1.svg";

type IMyPageModalProps = {
    isModalOpen: boolean,
    closeModal: () => void
};

export const MyPageModal: React.FC<IMyPageModalProps> = ({isModalOpen}) => {
	return (
    <Modal
      isOpen={isModalOpen}
      // style={customStyles}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
    >
      <Title>My Page</Title>
      <TitleLine />
    </Modal>
	);
};

// h2's font size is 30 px
// TODO: apply font
const Title = styled.h2`
  color: #000000;
  text-align: center;
  font-family: "Yanone Kaffeesatz";
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin-top: 72px;
`

const TitleLine = styled(Line)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

const ModalStyle = styled.div`
  width: 326px;
  height: 655px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E7E7E7;
  border-radius: 0.25rem;
  transition : all 0.3s ease-in-out;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

// background 설정하면 뒷 배경이 설정된다
const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;
`;
