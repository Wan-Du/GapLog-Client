import React from "react";
import styled from "styled-components";
import TitleBar from "../components/bars/TitleBar";
import MyPageBar from "../components/bars/MyPageBar";
import Wandubat from "../components/user/Wandubat";
import background from '../background.png';
import profile from '../profile.png';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UserWrapper = styled.div`
    height: 400px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
`;

const UserBackgroundImg = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 170px;
    overflow: hidden;

    & > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ProfileImg = styled.div`
    position: absolute;
    top: 130px;
    left: 100px;
    width: 130px;
    height: 130px;
    border-radius: 70%;
    overflow: hidden;

    & > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const UserId = styled.div`
    position: absolute;
    top: 270px;
    left: 122px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 27px;
    display: inline-block;
    color: #30180d;
    text-align: left;  
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
        <Container>
            <TitleBar />
            <UserWrapper>
                <UserBackgroundImg>
                    {/* data에서 user의 배경이미지와 연결 */}
                    <img src={background} alt="back" />
                </UserBackgroundImg>
                <ProfileImg>
                    <img src={profile} alt="profile" />
                </ProfileImg>
                <UserId>jinji123</UserId>
            </UserWrapper>
            <MyPageBarWrapper>
                <MyPageBar />
            </MyPageBarWrapper>
            <Wandubat />
        </Container>
    );
}

export default MyPage;
