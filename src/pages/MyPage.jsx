import React from "react";
import styled from "styled-components";
import data from '../data.json';
import PostList from '../components/post/PostList';
import TitleBar from "../components/bars/TitleBar";
import MyPageBar from "../components/bars/MyPageBar";


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentWrapper = styled.div`
    width: calc(100% - 32px);
    max-width: 1200px; 
    margin: 0 auto;
    margin-top: 20px;
`;

const MyPageBarWrapper = styled.div`
    top: 0;
    width: calc(100% - 32px);
    max-width: 1200px;
    z-index: 1000;
    background-color: white;
`;

function MyPage({ title }) {
    return (
        <Wrapper>
            <TitleBar />
            <MyPageBarWrapper>
                <MyPageBar />
            </MyPageBarWrapper>
            <ContentWrapper>
                <PostList posts={data} />
            </ContentWrapper>
        </Wrapper>
    );
}

export default MyPage;
