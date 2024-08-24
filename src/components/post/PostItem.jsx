import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FiHeart, FiMessageCircle, FiStar, FiMeh } from 'react-icons/fi';

//전체 Item 레이아웃
const Container = styled.div`
  width: 320px;
  height: 376px;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  justify-content: left;
  cursor: pointer;
`;

//User(프로필 이미지, user id, post 작성한 시간)
//User Item 레이아웃
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ProfileImg = styled.div`
  width: 45px;
  height: 45px;
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
`;

const UserId = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 600;
`;

const Date = styled.div`
  color: #8c939c;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 400;
`;

//Post(post 사진, icon bar, 제목, 본문)
const PostImg = styled.div`
  width: 100%;
  height: 210px;
  overflow: hidden;
  margin-bottom: 10px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 12px;
  color: #767676;
`;

const IconCount = styled.div`
  margin-left: 3px;
  margin-right: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #767676;
`;

const TitleText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const MainText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  height: 20px;
  margin: 0;
`;

function PostItem(props) {
  const { post, onClick } = props;
  const nav = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname != `/posts/${post.id}`) nav(`/posts/${post.id}`);
  };

  return (
    <Container onClick={handleClick}>
      <UserWrapper>
        <ProfileImg>
          <img src={post.userprofile} alt="profile" />
        </ProfileImg>
        <UserInfo>
          <UserId>{post.userid}</UserId>
          <Date>{post.date}</Date>
        </UserInfo>
      </UserWrapper>
      <PostImg>
        <img src={post.userprofile} alt="profile" />
      </PostImg>

      <IconWrapper>
        <FiHeart size="20" />
        <IconCount>{12}</IconCount>
        <FiMessageCircle size="20" />
        <IconCount>{12}</IconCount>
        <FiStar size="20" />
        <IconCount>{12}</IconCount>
        <FiMeh size="20" />
        <IconCount>{12}</IconCount>
      </IconWrapper>
      <TitleText>{post.title}</TitleText>
      <MainText>{post.content}</MainText>
    </Container>
  );
}

export default PostItem;
