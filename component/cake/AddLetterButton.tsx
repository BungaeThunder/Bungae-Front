import styled from 'styled-components';

import React from 'react';
import { RoundButton } from 'component/cake/RoundButton';
import pallette from 'public/styles/colorPalette';

type IAddLetterButtonProps = {
  beforeBday: boolean;
};

export const AddLetterButton: React.FC<IAddLetterButtonProps> = ({ beforeBday }) => {
  return (
    <Navigator className="wrapper">
      <RoundButton
        IconSrc="/icons/list.svg"
        IconSize={40}
        IconColor={pallette.yellow}
        IsActive={!beforeBday}
      ></RoundButton>
      <RoundButton
        IconSrc="/icons/share.svg"
        IconSize={60}
        IconColor={pallette.purple}
        IsActive={true}
      ></RoundButton>
      <RoundButton
        IconSrc="/icons/setting.svg"
        IconSize={40}
        IconColor={pallette.skyblue}
        IsActive={true}
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
