import React from 'react';
import styled from 'styled-components';
import Button from '../../style/Button';

const Container = styled.div`
  width: 100%;
  height: 80px;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  margin-right: 16px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserNickname = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 5px;
`;

const UserId = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 400;
`;

const UserBio = styled.div`
  margin-left: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-right: 830px;
`;

function FollowItem() {
  return (
    <Container>
      <ProfileImg>
        <img alt="profile" />
      </ProfileImg>
      <UserInfo>
        <UserNickname>나는다연</UserNickname>
        <UserId>@hongdari</UserId>
      </UserInfo>
      <UserBio>안녕하시소</UserBio>
      <Button title="팔로우" className="green" />
    </Container>
  );
}

export default FollowItem;
