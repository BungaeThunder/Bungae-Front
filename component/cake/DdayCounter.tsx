import styled from 'styled-components';

type DdayCounterProps = {
  isBeforeBirthday: boolean;
  dateDiff: number;
};

export const DdayCounter: React.FC<DdayCounterProps> = ({ isBeforeBirthday, dateDiff }) => {
  console.log(isBeforeBirthday, dateDiff);
  return <DdayCounterDiv>date</DdayCounterDiv>;
};

const DdayCounterDiv = styled.div`
  background-color: white;
  font-size: 100px;
  color: black;
  width: 100px;
`;
