import React from 'react';

type Birthday = {
	Birthday: string;
};

export const DdayCount: React.FC<Birthday> = ({ Birthday }) => {
	const BirthdayDate = new Date(Birthday);
	const TodayDate = new Date();
	const DateDiff = Math.abs(BirthdayDate.getTime() - TodayDate.getTime());
	return (
		<div>
			D{BirthdayDate < TodayDate ? '-' : '+'}
			{DateDiff}
		</div>
	);
	//return <button disabled={isArticle}>버튼1</button>;
};
