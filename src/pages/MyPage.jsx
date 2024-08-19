import React from "react";
import styled from "styled-components";
import TitleBar from "../components/bars/TitleBar";
import MyPageBar from "../components/bars/MyPageBar";
import Wandubat from "../components/user/Wandubat";
import background from '../background.png';
import profile from '../profile.png';

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
`;

const ProfileImg = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 70%;
    overflow: hidden;
    margin-right: 16px;
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
                <img src={background} alt="back" />
            </UserBackgroundImg>
            <ProfileImg>
                <img src={profile} alt="profile" />
            </ProfileImg>
            <MyPageBarWrapper>
                <MyPageBar />
            </MyPageBarWrapper>
            <Wandubat />
        </Wrapper>
    );
}

export default MyPage;
