// LoginAlertPage.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useUser } from '../components/user/UserContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from 'react-router-dom';
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
  const { setUser, setIsLoggedIn } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const GOOGLE_CLIENT_ID =
    '532116958585-ai85p5m9l2b6toodbgrvri9ejovfvjil.apps.googleusercontent.com';
  const REDIRECT_URI = 'http://localhost:3000';
  const SCOPE =
    'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';
  const RESPONSE_TYPE = 'code';

  const handleGoogleLogin = () => {
    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=${encodeURIComponent(SCOPE)}&response_type=${RESPONSE_TYPE}`;

    window.location.href = oauthUrl;
  };

  useEffect(() => {
    const fetchToken = async (code) => {
      try {
        const response = await fetch('http://3.37.43.129/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ authorizationCode: code }),
        });

        if (!response.ok) {
          throw new Error('Failed to retrieve token');
        }

        const data = await response.json();
        console.log(data);
        const token = data.accessToken;

        // JWT 토큰을 로컬 스토리지에 저장
        localStorage.setItem('accessToken', token);
        setIsLoggedIn(true);
        // 사용자 대시보드로 리디렉션
        navigate('/');
      } catch (error) {
        setError(error.message);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      fetchToken(code);
    }
  }, [navigate, setIsLoggedIn]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>로그인</Title>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ButtonWrapper>
          <IconButton>
            <GitHubIcon
              sx={{
                size: '24px',
                color: 'black',
              }}
            />
          </IconButton>
          <FcGoogle size="24" onClick={handleGoogleLogin} />
        </ButtonWrapper>
        <button>로그인</button>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LoginAlertPage;
