//게시글 click event로 보여지는 게시글 상세 페이지
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import background from '../background.png';
import { FiHeart, FiMessageCircle, FiStar, FiMeh } from 'react-icons/fi';
import CommentList from '../components/comment/CommentList';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import IconButton from '@mui/material/IconButton';

const Container = styled.div`
  width: calc(100% - 32px);
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
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
  font-size: 22px;
  font-weight: 600;
`;

const Date = styled.div`
  color: #8c939c;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 400;
`;

const TitleText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const MainText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
  margin: 0;
`;

const PostImg = styled.div`
  width: 100%;
  height: 480px;
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
  height: 24px;
  position: relative;
  display: flex;
  align-items: center;
  text-align: left;
  color: #767676;
`;

const IconCount = styled.div`
  margin-left: 5px;
  margin-right: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #767676;
`;

const InputField = styled.input`
  height: 36px;
  width: 83%;
  border: 0;
  border-radius: 100px;
  outline: none;
  padding-left: 20px;
  background-color: #f1f2f5;
  color: #66676b;
  font-family: 'Inter', sans-serif;
`;

const SendButton = styled.button`
  width: 70px;
  border: none;
  background: none;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  color: #8c939c;
`;

function ViewPostPage() {
  const { postId } = useParams(); // URL 파라미터에서 postId 가져오기
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://3.37.43.129:3000/api/posts/${postId}`
        ); // API URL 수정
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return <div>Loading post...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  if (!post) {
    return <div>No post found.</div>;
  }

  return (
    <Container>
      <UserWrapper>
        <ProfileImg>
          <img src={post.username} alt="profile" />
        </ProfileImg>
        <UserInfo>
          <UserId>{post.username}</UserId>
          <Date>{post.created_at}</Date>
        </UserInfo>
      </UserWrapper>
      <ContentWrapper>
        <TitleText>{post.title}</TitleText>
        <MainText>{post.content}</MainText>
      </ContentWrapper>
      <PostImg>
        <img src={post.thumbnail} alt="profile" />
      </PostImg>
      <IconWrapper>
        <FiHeart size="24" />
        <IconCount>{1}</IconCount>
        <FiMessageCircle size="24" />
        <IconCount>{2}</IconCount>
        <FiStar size="24" />
        <IconCount>{2}</IconCount>
        <FiMeh size="24" />
        <IconCount>{2}</IconCount>
      </IconWrapper>
      <UserWrapper>
        <ProfileImg>
          <img src={background} alt="profile" />
        </ProfileImg>
        <InputField
          type="text"
          onChange={handleChange}
          value={comment}
          placeholder="Write a comment..."
        ></InputField>
        <IconButton>
          <CropOriginalIcon
            sx={{
              size: '24px',
              color: '#C4C4C4',
            }}
          />
        </IconButton>
        <SendButton>보내기</SendButton>
      </UserWrapper>
      <CommentList postId={postId}></CommentList>
    </Container>
  );
}

export default ViewPostPage;
