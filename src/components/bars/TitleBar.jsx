import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../style/Button';
import { FiSearch, FiBell, FiSend } from 'react-icons/fi';
import DmAlertPage from '../../pages/DmAlertPage';
import LoginAlertPage from '../../pages/LoginAlertPage';
import { GoogleOAuthProvider } from '@react-oauth/google';

//전체 모든 페이지에서 보여지는 gaplog 제목 bar
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nav = useNavigate();
  const location = useLocation();

  const checkLoginStatus = () => {
    const token = localStorage.getItem('token'); // 또는 sessionStorage.getItem('token')
    return token ? true : false; // 토큰이 있으면 로그인 상태
  };

  useEffect(() => {
    const loggedIn = checkLoginStatus();
    setIsLoggedIn(loggedIn);
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchUserInfo = async (jwtToken) => {
    try {
      const response = await fetch('/api/user/me', {
        // 또는 '/api/user/{user_id}' 형태로 수정 가능
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`, // JWT를 Authorization 헤더에 포함
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user info');
      }
      const userInfo = await response.json();
      console.log('User Info:', userInfo);
      return userInfo;
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const handleLoginSuccess = async (credentialResponse) => {
    const jwtToken = credentialResponse.credential; // JWT 토큰
    console.log('JWT Token:', jwtToken);

    // JWT를 로컬 스토리지에 저장
    localStorage.setItem('token', jwtToken);

    // 사용자 정보 가져오기
    const userInfo = await fetchUserInfo(jwtToken);
    if (userInfo) {
      // 사용자 정보를 이용한 추가 로직 (예: 상태 업데이트)
      console.log('Retrieved User Info:', userInfo);
      setIsLoggedIn(true); // 로그인 상태 업데이트
    }
  };

  const handleLoginFailure = (error) => {
    console.error('로그인 실패:', error);
  };

  const handleClick = () => {
    if (location.pathname != '/') nav('/');
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Container>
        <MainTitleText onClick={handleClick}>GapLog</MainTitleText>
        <ButtonWrapper>
          <FiSearch size="22" />
          {!isLoggedIn ? (
            <LoginButton title="로그인">로그인</LoginButton>
          ) : (
            <>
              <FiBell size="22" />
              <FiSend size="22" onClick={openModal} />
              <LoginButton title="새 글 작성">새 글 작성</LoginButton>
            </>
          )}
        </ButtonWrapper>
        <DmAlertPage isOpen={isModalOpen} onClose={closeModal} />
        <LoginAlertPage
          isOpen={isModalOpen && !isLoggedIn}
          onClose={closeModal}
          onLogin={handleLoginSuccess}
        />
      </Container>
    </GoogleOAuthProvider>
  );
}

export default TitleBar;
