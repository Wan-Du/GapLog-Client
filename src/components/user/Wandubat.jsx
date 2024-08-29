import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import wanduData from '../../wandu.json';

// 숫자에 따른 색상 매핑
const getColor = (value) => {
  const colors = [
    '#DDDFE0',
    '#8CE79B',
    '#77CC85',
    '#5B9765',
    '#DAA235',
    '#BF7027',
    '#62331C',
  ];
  return colors[Math.min(value, colors.length - 1)];
};

const Container = styled.div`
  width: 1090px;
  height: 350px;
  background-color: #f4f4f4;
  display: block;
  padding: 0px 20px;
`;

const WanduWrapper = styled.div`
  position: relative;
  align-items: flex-start;
  display: flex;
`;

const DayWrapper = styled.div`
  width: 17px;
  position: relative;
  font-size: 16px;
  font-weight: 300;
  font-family: 'Inter', sans-serif;
  color: #8c939c;
  text-align: center;
  display: inline-block;
  margin-top: 20px;
  margin-left: 50px;

  & > p {
    margin-top: 7.5px;
    margin-bottom: 7px;
  }
`;

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  color: #000;
  text-align: left;
  display: inline-block;
  font-weight: 600;
  margin-top: 20px;
  margin-left: 125px;
`;

// Grass 컴포넌트
const GrassContainer = styled.div`
  width: 875px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 30px);
  grid-template-rows: repeat(auto-fill, 28px);
  grid-auto-flow: column;
  align-items: center;
  justify-items: center;
  margin: 20px 60px;
`;

// Square 컴포넌트
const Square = styled.div`
  width: 20px;
  height: 20px;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  transition:
    background-color 0.3s,
    transform 0.3s; /* 부드러운 전환 효과 */

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const MaxDay = styled.div`
  width: 130px;
  height: 15px;
  margin-left: 125px;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  color: #767676;
  text-align: left;
  display: inline-block;
`;

const ExampleWrapper = styled.div`
  width: 200px;
  position: absolute;
  display: flex;
  align-items: flex-start;
  right: 63px;
`;

const Count = styled.div`
  width: 30px;
  height: 15px;
  margin-left: 8px;
  font-size: 12px;
  color: #767676;
  text-align: left;
  display: inline-block;
  font-family: 'Inter', sans-serif;
`;

const Grass = ({ dailyData }) => {
  return (
    <GrassContainer>
      {Object.entries(dailyData).map(([date, value], index) => (
        <Square key={index} color={getColor(value)}></Square>
      ))}
    </GrassContainer>
  );
};

function Wandubat() {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    setDailyData(wanduData);
  }, []);

  return (
    <Container>
      <Title>현재 {3}일</Title>
      <WanduWrapper>
        <DayWrapper>
          <p>S</p>
          <p>M</p>
          <p>T</p>
          <p>W</p>
          <p>T</p>
          <p>F</p>
          <p>S</p>
        </DayWrapper>
        <Grass dailyData={dailyData} />
      </WanduWrapper>
      <BottomWrapper>
        <MaxDay>최장 {3}일 진지충 성공</MaxDay>
        <ExampleWrapper>
          <Square color={getColor(1)} />
          <Count>1개</Count>
          <Square color={getColor(2)} />
          <Count>2개</Count>
          <Square color={getColor(3)} />
          <Count>3개</Count>
        </ExampleWrapper>
      </BottomWrapper>
    </Container>
  );
}

Grass.propTypes = {
  dailyData: PropTypes.object.isRequired,
};

export default Wandubat;
