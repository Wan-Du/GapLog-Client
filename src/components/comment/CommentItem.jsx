//댓글 item 컴포넌트
import React from 'react';
import styled from 'styled-components';
import { FiHeart, FiMessageCircle } from 'react-icons/fi';

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
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
`;

const UserId = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 5px;
`;

const Date = styled.div`
  color: #8c939c;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 400;
`;

const MainText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 530px;
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 400;
`;

const IconWrapper = styled.div`
  height: 100%;
  gap: 20px;
  display: flex;
  align-items: center;
  color: #767676;
  margin-left: auto;
  margin-right: 10px;
`;

const HideButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
`;

function CommentItem({ comment, hasReplies, onToggleHide }) {
  return (
    <Container>
      <ProfileImg>
        <img src={comment.userProfile} alt="profile" />
      </ProfileImg>
      <UserInfo>
        <UserId>{comment.userId}</UserId>
        <Date>{comment.date}</Date>
      </UserInfo>
      <MainText>{comment.content}</MainText>
      <IconWrapper>
        <FiMessageCircle size="24" />
        <FiHeart size="24" />
        {hasReplies && (
          <HideButton onClick={onToggleHide}>
            {comment.isHidden ? '댓글 보기' : '댓글 숨기기'}
          </HideButton>
        )}
      </IconWrapper>
    </Container>
  );
}

export default CommentItem;
