//게시글 click event로 보여지는 게시글 상세 페이지
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import background from '../background.png';

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
  margin: 30px 0;
`;

const UserWrapper = styled.div`
  display: flex;
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

function ViewPostPage() {
  const { postId } = useParams(); // URL 파라미터에서 postId 가져오기
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/posts/${postId}`
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
    return <div>error</div>;
  }

  if (!post) {
    return <div>No post found.</div>;
  }

  return (
    <Container>
      <UserWrapper>
        <ProfileImg>
          <img src={background} alt="profile" />
        </ProfileImg>
        <UserInfo>
          <UserId>jinji123</UserId>
          <Date>어제 13:05</Date>
        </UserInfo>
      </UserWrapper>
      <ContentWrapper>
        <TitleText>리액트에서 리스트 렌더링하기</TitleText>
        <MainText>안녕안녕안녕</MainText>
      </ContentWrapper>
      <PostImg>
        <img src={background} alt="profile" />
      </PostImg>
    </Container>
  );
}

export default ViewPostPage;
