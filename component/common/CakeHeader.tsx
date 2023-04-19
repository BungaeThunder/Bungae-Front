import React from 'react';

type CakeHeaderProps = {
  userName: string;
  dDay: number;
};
export const CakeHeader: React.FC<CakeHeaderProps> = ({ userName, dDay }) => {
  console.log(userName, dDay);
  return <p>hi?</p>;
};
