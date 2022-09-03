import styled from 'styled-components';

import React from 'react';
import Image from 'next/image';

type RoundButtonProps = {
  iconSrc: string;
  iconSize: number;
  iconColor: string;
  isDisabled: boolean;
};

export const RoundButton: React.FC<RoundButtonProps> = ({
  iconSrc,
  iconSize,
  iconColor,
  isDisabled,
}) => {
  return (
    <Button iconSize={iconSize} iconColor={iconColor} disabled={isDisabled}>
      <Image src={iconSrc} alt="button" width={18} height={30} />
    </Button>
  );
};

const Button = styled.button<{ iconSize: number; iconColor: string }>`
  text-align: center;
  width: ${props => props.iconSize}px;
  height: ${props => props.iconSize}px;
  border-radius: 50%;
  background-color: ${props => props.iconColor};
  float: left;
  color: white;
`;
