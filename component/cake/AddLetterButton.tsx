import styled from 'styled-components';

import React from 'react';
import { RoundButton } from 'component/cake/RoundButton';
import pallette from 'public/styles/colorPalette';

type IAddLetterButtonProps = {
  isBeforeBirthday: boolean;
};

export const AddLetterButton: React.FC<IAddLetterButtonProps> = ({ isBeforeBirthday }) => {
  return (
    <Navigator className="wrapper">
      <RoundButton
        iconSrc="/icons/list.svg"
        iconSize={40}
        iconColor={pallette.gray}
        isDisabled={isBeforeBirthday}
      ></RoundButton>
      <RoundButton
        iconSrc="/icons/share.svg"
        iconSize={60}
        iconColor={pallette.purple}
        isDisabled={!isBeforeBirthday}
      ></RoundButton>
      <RoundButton
        iconSrc="/icons/setting.svg"
        iconSize={40}
        iconColor={pallette.skyblue}
        isDisabled={false}
      ></RoundButton>
    </Navigator>
  );
};

const Navigator = styled.nav`
  overflow: hidden;
  /* border-style: double;
  border-color: red; */
  width: 174px;
  height: 60px;
  position: absolute;
  left: calc(50% - 174px / 2 - 0.5px);
  bottom: 48px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
