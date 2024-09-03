import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

//Post Item을 그리드 형식으로 출력
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: 16px;
  row-gap: 30px;
  justify-items: center;
  height: 500px;
  grid-template-areas: 'Wrapper';
`;

function PostList(props) {
  const { userId, posts, onClickItem, pageType } = props;

  const columns = pageType === 'mypage' ? 2 : 3;

  return (
    <Container>
      <Wrapper columns={columns}>
        {posts.map((post) => {
          return (
            <PostItem
              userId = {userId}
              key={post.id}
              post={post}
              onClick={() => {
                onClickItem(post);
              }}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
}

export default PostList;
