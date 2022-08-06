import React from 'react';

type IAddLetterButtonProps = {
  isArticle: boolean;
};

export const AddLetterButton: React.FC<IAddLetterButtonProps> = ({ isArticle }) => {
  return <button disabled={isArticle}>버튼1</button>;
};
