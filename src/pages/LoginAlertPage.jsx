// LoginAlertPage.jsx
import React from 'react';
import styled from 'styled-components';
import { GoogleLogin } from '@react-oauth/google'; // Google OAuth 라이브러리

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 20px;
`;

const LoginAlertPage = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  const handleLoginSuccess = (credentialResponse) => {
    const userId = credentialResponse.profileObj.email; // 사용자 이메일 또는 ID
    onLogin(userId); // 부모 컴포넌트에 로그인 정보 전달
    onClose(); // 모달 닫기
  };

  const handleLoginFailure = (error) => {
    console.error('로그인 실패:', error);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>로그인</h2>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          style={{ marginTop: '20px' }}
        />
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LoginAlertPage;
