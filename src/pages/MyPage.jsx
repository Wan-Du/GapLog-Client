import React from "react";
import styled from "styled-components";
import TitleBar from "../components/bars/TitleBar";
import MyPageBar from "../components/bars/MyPageBar";


const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
const UserBackgroundImg = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 170px;
    overflow: hidden;
    margin-bottom: 10px;

    & > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`


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
            <UserBackgroundImg>
                {/* data에서 user의 배경이미지와 연결 */}
                <img alt="background" />
            </UserBackgroundImg>
            <MyPageBarWrapper>
                <MyPageBar />
            </MyPageBarWrapper>
        </Wrapper>
    );
}

export default MyPage;
