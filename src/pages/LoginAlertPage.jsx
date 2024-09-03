// LoginAlertPage.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useUser } from '../components/user/UserContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { FcGoogle } from 'react-icons/fc';

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
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  gap: 10px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
`;

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const CloseButton = styled.button`
  margin-top: 20px;
`;

const LoginAlertPage = ({ isOpen, onClose }) => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useUser();
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');

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

  useEffect(() => {
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>로그인</Title>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <ButtonWrapper>
          <IconButton>
            <GitHubIcon
              sx={{
                size: '24px',
                color: 'black',
              }}
            />
          </IconButton>
          <FcGoogle size="24" />
        </ButtonWrapper>
        <button onClick={handleLogin}>로그인</button>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LoginAlertPage;
