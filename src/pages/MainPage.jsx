import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostList from '../components/post/PostList';
import MainBar from '../components/bars/MainBar';
import TitleBar from '../components/bars/TitleBar';

const Wrapper = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//postlist layout
const ContentWrapper = styled.div`
  width: calc(100% - 32px);
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
`;

const MainBarWrapper = styled.div`
  top: 0;
  width: calc(100% - 32px);
  max-width: 1200px;
  z-index: 0;
  background-color: white;
`;

function MainPage(props) {
  const { posttype } = props;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `http://3.37.43.129/api/posts/${posttype}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch info');
        }
        const data = await response.json();
        console.log('Posts Data: ', data);
        setPosts(data); // API로부터 받은 데이터를 state에 저장
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [posttype]);

  return (
    <Wrapper>
      <TitleBar />
      <MainBarWrapper>
        <MainBar />
      </MainBarWrapper>
      <ContentWrapper>
        <PostList posts={posts} pageType="main" />
      </ContentWrapper>
    </Wrapper>
  );
}

export default MainPage;
