// LoginAlertPage.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { useUser } from '../components/user/UserContext';

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
  z-index: 2000;
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

const LoginAlertPage = ({ isOpen, onClose }) => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useUser();
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleLogin = async () => {
    if (userId) {
      try {
        const response = await fetch(`http://3.37.43.129/api/auth/1`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('로그인 실패: ' + response.status);
        }

        // 사용자 정보를 가져오는 API 호출
        const userResponse = await fetch(
          `http://3.37.43.129/api/user/${userId}`,
          {
            method: 'GET',
          }
        );

        if (!userResponse.ok) {
          throw new Error('사용자 정보 가져오기 실패: ' + userResponse.status);
        }

        const userData = await userResponse.json();

        // 사용자 정보를 Context에 설정
        setUser(userData);
        onClose(); 
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError('아이디를 입력해주세요.');
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>로그인</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <button onClick={handleLogin}>로그인</button>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LoginAlertPage;
