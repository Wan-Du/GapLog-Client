//mypage -> follower list view 페이지
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TitleBar from '../components/bars/TitleBar';
import FollowItem from '../components/user/FollowItem';

const Container = styled.div`
  width: calc(100% - 32px);
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 10px;
`;

const ProfileImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 70%;
  overflow: hidden;
  margin-right: 16px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserId = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 20px;
  display: inline-block;
  color: #30180d;
  text-align: left;
`;

const TitleWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  color: #30180d;
  text-align: left;
  align-items: center;

  &.count {
    font-size: 30px;
  }
`;

function FollowListPage() {
  return (
    <Container>
      <TitleBar />
      <UserWrapper>
        <ProfileImg>
          <img alt="profile" />
        </ProfileImg>
        <UserId>jinji123의 팔로워</UserId>
      </UserWrapper>
      <TitleWrapper>
        <TitleWrapper className="count">20명</TitleWrapper>의 팔로워
      </TitleWrapper>
      <FollowItem></FollowItem>
    </Container>
  );
}

export default FollowListPage;
