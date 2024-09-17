import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

//mypage에서 사용
const Container = styled.div`
  display: flex;
  justify-content: left;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 18px;
  color: #30180d;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  opacity: 0.5;
  padding-left: 20px;

  &.active {
    opacity: 1;
  }

  &:hover {
    text-decoration: underline;
  }
`;

function MyPageBar() {
  return (
    <Container>
      <Wrapper>
        <nav>
          {/* 임시 url */}
          <NavItem to="/mypage/main" exact>
            개요
          </NavItem>
          <NavItem to="/mypage/post">게시글</NavItem>
          <NavItem to="/mypage/scrap">스크랩</NavItem>
          <NavItem to="/mypage/comment">댓글</NavItem>
        </nav>
      </Wrapper>
    </Container>
  );
}

export default MyPageBar;
