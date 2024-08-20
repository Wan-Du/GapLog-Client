import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../style/Button";
import TitleBar from "../components/bars/TitleBar";
import MyPageBar from "../components/bars/MyPageBar";
import Wandubat from "../components/user/Wandubat";
import background from '../background.png';
import profile from '../profile.png';
import data from '../user.json';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UserWrapper = styled.div`
    height: 380px;
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

const UserBio = styled.div`
  	width: 320px;
  	position: absolute;
    top: 278px;
    left: 240px;
  	font-size: 15px;
  	font-weight: 550;
  	font-family: "Inter", sans-serif;
  	color: rgba(48, 24, 13, 0.73);
  	text-align: left;
  	display: inline-block;
`;

const FollowerWrapper = styled.div`
    position: absolute;
    top: 300px;
    left: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

const UserFollower = styled.div`
    width: 79px;
    font-size: 14px;
    font-weight: 550;
    color: rgba(48, 24, 13, 0.73);
    font-family: "Inter", sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > a{
        margin-top: 2px;
        margin-left: 10px;
        font-weight: 700;
        text-decoration: none;
        color: rgba(48, 24, 13, 0.73);
    }

    & > a:hover {
        text-decoration: underline;
        color: "#30180D";
    }
`;

const MyPageBarWrapper = styled.div`
    top: 0;
    width: calc(100% - 32px);
    max-width: 1200px;
    z-index: 1000;
    background-color: white;
    margin-bottom: 10px;
`;

const TierWrapper = styled.div`
    width: 1130px;
    height: 60px;
    margin: 15px 0px;
`;

const TierTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.color};
    text-align: left;
    display: inline-block;
`;

const TierScore = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${props => props.color};
    text-align: left;
    display: inline-block;
    margin: 8px 8px;
`;

const TierBar = styled.div`
    width: 100%;
    height: 23px;
    background-color: #e0e0e0; 
    border-radius: 4px;
`;

const TierScoreBar = styled.div`
    height: 100%;
    width: ${props => props.width};
    background-color: ${props => props.color};
    border-radius: 4px;
`;

const tierColors = {
    Ruby: "#ff0062",
    Diamond: "#00b4fc",
    Platinum: "#27e2a4",
    Gold: "#EC9A00", 
    Silver: "#435f7a", 
    Bronze: "#ad5600" 
};


function MyPage({ title }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setUserData(data.user);
    }, []);

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
                <UserId>{userData ? userData.id : 'null'}</UserId>
                <UserBio>{userData ? userData.bio : ' '}</UserBio>
                <FollowerWrapper>
                    <UserFollower>
                        <p>팔로워</p>
                        <a href="/mypage/follower">{userData ? userData.follower : ' '}</a>
                    </UserFollower>
                    <UserFollower>
                        <p>팔로잉</p>
                        <a href="/mypage/following">{userData ? userData.following : ' '}</a>
                    </UserFollower>
                </FollowerWrapper>
                <Button title="프로필 편집" className="grey" />
            </UserWrapper>
            <MyPageBarWrapper>
                <MyPageBar />
            </MyPageBarWrapper>
            <TierWrapper>
                {userData && (
                    <>
                        <TierTitle color={tierColors[userData.tier] || "#30180d"}>{userData.tier}</TierTitle>
                        <TierScore color={tierColors[userData.tier] || "#30180d"}>{userData.score}</TierScore>
                        <TierBar>
                            <TierScoreBar 
                                width={`${(userData.score / 100) * 100}%`} 
                                color={tierColors[userData.tier] || "#30180d"}
                            />
                        </TierBar>
                    </>
                )}
            </TierWrapper>
            <Wandubat />
        </Container>
    );
}

export default MyPage;
