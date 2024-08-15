import React from 'react';
import styled from 'styled-components'
import PostItem from './PostItem';

//Post Item을 그리드 형식으로 출력
const Container = styled.div`
    display: flex; 
    justify-content: center; 
`;

const Wrapper = styled.div`
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 16px; 
    row-gap: 30px;
    justify-items: center; 
    height: 500px;
    grid-template-areas: "Wrapper";
`;

function PostList(props) {
    const { posts, onClickItem } = props;

    return (
        <Container>
            <Wrapper>
            {posts.map((post, index) => {
                return (
                    <PostItem
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