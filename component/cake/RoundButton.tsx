import styled from 'styled-components';

import React from 'react';
import Image from 'next/image';

type RoundButtonProps = {
  IconSrc: string;
  IconSize: number;
  IconColor: string;
  isDisabled: boolean;
};

export const RoundButton: React.FC<RoundButtonProps> = ({
  IconSrc,
  IconSize,
  IconColor,
  isDisabled,
}) => {
  return (
    <Button IconSize={IconSize} IconColor={IconColor} disabled={isDisabled}>
      <Image src={IconSrc} alt="button" width={18} height={30} />
    </Button>
  );
};

const Button = styled.button<{ IconSize: number; IconColor: string }>`
  text-align: center;
  width: ${props => props.IconSize}px;
  height: ${props => props.IconSize}px;
  border-radius: 50%;
  background-color: ${props => props.IconColor};
  float: left;
  color: white;
`;
