import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import wanduData from '../../wandu.json';

// 숫자에 따른 색상 매핑
const getColor = (value) => {
    const colors = ['#DDDFE0', '#8CE79B', '#77CC85', '#5B9765', 
        '#DAA235', '#BF7027', '#62331C'];
    return colors[Math.min(value, colors.length - 1)];
};

const Container = styled.div`
    width: 1090px;
    height: 320px;
    background-color: #F4F4F4;
    display: block;
    padding: 0px 20px;
`;

const Wrapper = styled.div`
    position: relative;
    align-items: flex-start;
    display: flex;
`;

const DayWrapper = styled.div`
    width: 17px;
    position: relative;
    font-size: 16px;
    font-weight: 300;
    font-family: "Inter", sans-serif;
    color: #8c939c;
    text-align: center;
    display: inline-block;
    margin-top: 20px;

    & > p{
        margin-top: 6px;
        margin-bottom: 6px;
    }
`;

const Title = styled.div`
    font-family: "Inter", sans-serif;
    font-size: 24px;
    color: #000;
    text-align: left;
    display: inline-block;
    font-weight: 600;
    margin-top: 20px;
    margin-left: 75px;
`;

// Grass 컴포넌트
const GrassContainer = styled.div`
    width: 875px;
    height: 175px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 25px);
    grid-template-rows: repeat(auto-fill, 25px);
    align-items: center;
    justify-items: center;
    margin: 25px 60px;
`;

// Square 컴포넌트
const Square = styled.div`
    width: 18px; 
    height: 18px;
    align-items: center;
    border-radius: 5px;
    background-color: ${({ color }) => color};
    transition: background-color 0.3s, transform 0.3s; /* 부드러운 전환 효과 */
    
    &:hover {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
    }
`;

const Grass = ({ dailyData }) => {
    return (
      <GrassContainer>
        {Object.entries(dailyData).map(([date, value], index) => (
          <Square key={index} color={getColor(value)}>
          </Square>
        ))}
      </GrassContainer>
    );
};

function Wandubat(){
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        setDailyData(wanduData);
      }, []);

    return (
        <Container>
            <Title>
                현재 {3}일
            </Title>
            <Wrapper>
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
            </Wrapper>
        </Container>

    );
};

export default Wandubat;