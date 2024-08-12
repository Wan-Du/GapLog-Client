import React from "react";
import styled from "styled-components";
import data from '../data.json';
import PostList from '../components/post/PostList';
import MainBar from "../components/bars/MainBar";
import TitleBar from "../components/bars/TitleBar";


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
                <PostList posts={data} />
            </ContentWrapper>
        </Wrapper>
    );
}

export default MainPage;



