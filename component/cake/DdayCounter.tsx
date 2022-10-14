import styled from 'styled-components';

type DdayCounterProps = {
  isBeforeBirthday: boolean;
  dateDiff: number;
};

export const DdayCounter: React.FC<DdayCounterProps> = ({ isBeforeBirthday, dateDiff }) => {
  console.log(isBeforeBirthday, dateDiff);
  const dateString =
    'D' + (isBeforeBirthday ? '-' : '+') + (dateDiff == 0 ? 'Day' : dateDiff.toString());
  return <DdayCounterDiv>{dateString}</DdayCounterDiv>;
};

const DdayCounterDiv = styled.div`
  width: 99px;
  height: 63px;
  left: 36px;
  top: 65px;

  background: #ffffff;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.25), inset 4px 4px 5px rgba(235, 235, 235, 0.25);
  border-radius: 6px;

  text-align: center;
  line-height: 63px;
  font-family: 'Fredoka One';
  font-size: 1.2em;
`;
