import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../style/Button';
import { FiSearch, FiBell, FiSend } from 'react-icons/fi';
import DmAlertPage from '../../pages/DmAlertPage';
import { useUser } from '../user/UserContext'; // Context 사용
import LoginAlertPage from '../../pages/LoginAlertPage'; // LoginAlertPage import

const Container = styled.div`
  width: calc(100% - 32px);
  max-width: 1200px;
  height: 40px;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;
`;

const MainTitleText = styled.div`
  font-size: 24px;
  color: #30180d;
  font-family: 'Russo One', Helvetica;
  font-weight: 400;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const LoginButton = styled(Button)`
  margin-left: 0 auto;
  cursor: pointer;
`;

function TitleBar(props) {
  const { user, isLoggedIn } = useUser();
  const [isDMModalOpen, setIsDMModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // 로그인 모달 상태
  const nav = useNavigate();
  const location = useLocation();

  const handleTitleClick = () => {
    if (location.pathname !== '/') nav('/');
  };

  const handleWriteClick = () => {
    if (location.pathname !== '/write') nav('/write');
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true); // 로그인 모달 열기
  };

  return (
    <Container>
      <MainTitleText onClick={handleTitleClick}>GapLog</MainTitleText>
      <ButtonWrapper>
        <FiSearch size="22" />
        {isLoggedIn ? (
          <>
            <FiBell size="22" />
            <FiSend size="22" onClick={() => setIsDMModalOpen(true)} />
            <LoginButton onClick={handleWriteClick} title="새 글 작성">
              새 글 작성
            </LoginButton>
          </>
        ) : (
          <LoginButton title="로그인" onClick={handleLoginClick}>
            로그인
          </LoginButton>
        )}
      </ButtonWrapper>
      <DmAlertPage
        isOpen={isDMModalOpen}
        onClose={() => setIsDMModalOpen(false)}
      />
      <LoginAlertPage
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </Container>
  );
}

export default TitleBar;
