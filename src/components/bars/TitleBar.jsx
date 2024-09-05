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

const ProfileImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 70%;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileMenu = styled.div`
  position: absolute;
  right: 0;
  top: 40px; // 버튼 아래 위치
  width: 150px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1001;
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

function TitleBar(props) {
  const { user, isLoggedIn, setUser } = useUser();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
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

  const handleProfileClick = () => {
    setIsProfileMenuOpen((prev) => !prev); // 프로필 메뉴 열기/닫기
  };

  const handleLogout = async () => {
    try {
      // 로컬 스토리지에서 access 토큰 제거
      localStorage.removeItem('accessToken');

      // 쿠키에서 refresh 토큰 제거
      document.cookie =
        'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      // 사용자 상태를 null로 설정
      setUser(null);

      // 홈 페이지로 리디렉션
      nav('/');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
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
            <ProfileImg onClick={handleProfileClick}>
              <img alt="profile" />
            </ProfileImg>

            {isProfileMenuOpen && (
              <ProfileMenu>
                <MenuItem onClick={() => nav('/mypage/main')}>
                  마이페이지
                </MenuItem>
                <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
                <MenuItem onClick={() => nav('/settings')}>설정</MenuItem>
              </ProfileMenu>
            )}
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
