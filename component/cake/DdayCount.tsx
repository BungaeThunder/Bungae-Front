import React from 'react';

type dDay = {
  Birthday: string;
  Today: string;
};

export const DdayCount: React.FC<dDay> = ({ Birthday, Today }) => {
  const BirthdayDate = new Date(Birthday);
  const TodayDate = new Date(Today);
  const DateDiff = Math.abs((BirthdayDate.getTime() - TodayDate.getTime()) / (1000 * 60 * 60 * 24));
  return (
    <div>
      D{BirthdayDate > TodayDate ? '-' : '+'}
      {Math.floor(DateDiff)}
    </div>
  );
  //return <button disabled={isArticle}>버튼1</button>;
};
