import React from 'react';
import styled from 'styled-components';
import data from '../data.json';
import PostList from '../components/post/PostList';
import MainBar from '../components/bars/MainBar';
import TitleBar from '../components/bars/TitleBar';

const Wrapper = styled.div`
  width: 100%;
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

//mainbar(gaplog, 팔로잉, 인기글) layout -> 추후에 mainbar로 옮겨갈지 고민..
const MainBarWrapper = styled.div`
  top: 0;
  width: calc(100% - 32px);
  max-width: 1200px;
  z-index: 1000;
  background-color: white;
`;

function MainPage({ title }) {
  return (
    <Wrapper>
      <TitleBar />
      <MainBarWrapper>
        <MainBar />
      </MainBarWrapper>
      <ContentWrapper>
        {/* data.json에서 하나의 post를 mapping할 수 있도록 연결 */}
        <PostList posts={data} pageType="main" />
      </ContentWrapper>
    </Wrapper>
  );
}

export default MainPage;
