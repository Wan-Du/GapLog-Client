import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import wanduData from '../../wandu.json';

// 숫자에 따른 색상 매핑
const getColor = (value) => {
    const colors = ['#e0e0e0', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ff9800', '#f44336'];
    return colors[Math.min(value, colors.length - 1)];
};

const Container = styled.div`
    width: 1090px;
    height: 320px;
    background-color: #F4F4F4;
    padding: 20px;
`;

// Grass 컴포넌트
const GrassContainer = styled.div`
    width: 950px;
    display: grid;
    grid-template-columns: repeat(40, 1fr); 
    padding-left: 130px;
    gap: 3px;
`;

const Title = styled.div`
    font-family: "Inter", sans-serif;
    font-size: 24px;
    color: #000;
    text-align: left;
    display: inline-block;
    font-weight: 600;
`;

// Square 컴포넌트
const Square = styled.div`
    width: 18px; 
    height: 18px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
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
            <Grass dailyData={dailyData} />
        </Container>

    );
};

export default Wandubat;