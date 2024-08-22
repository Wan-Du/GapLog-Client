import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../style/Button';
import PostList from '../components/post/PostList';
import TitleBar from '../components/bars/TitleBar';
import MyPageBar from '../components/bars/MyPageBar';
import Wandubat from '../components/user/Wandubat';
import background from '../background.png';
import profile from '../profile.png';
import data from '../user.json';
import post from '../data.json';

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

  & > img {
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

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserId = styled.div`
  position: absolute;
  top: 270px;
  left: 122px;
  font-family: 'Inter', sans-serif;
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
  font-family: 'Inter', sans-serif;
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
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > a {
    margin-top: 2px;
    margin-left: 10px;
    font-weight: 700;
    text-decoration: none;
    color: rgba(48, 24, 13, 0.73);
  }

  & > a:hover {
    text-decoration: underline;
    color: '#30180D';
  }
`;

const MyPageBarWrapper = styled.div`
  top: 0;
  width: calc(100% - 32px);
  max-width: 1200px;
  z-index: 0;
  background-color: white;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  width: 1130px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TierWrapper = styled.div`
  width: 100%;
  height: 60px;
  margin: 15px 0px;
`;

const TierTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.color};
  text-align: left;
  display: inline-block;
`;

const TierScore = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => props.color};
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
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  border-radius: 4px;
`;

const TierTitleColors = {
  1: '#ff0062',
  2: '#00b4fc',
  3: '#27e2a4',
  4: '#EC9A00',
  5: '#435f7a',
  6: '#ad5600',
};

const TierBarColors = {
  1: '#E99191',
  2: '#84D9FB',
  3: '#7FDFBF',
  4: '#EFBC5C',
  5: '#7491AC',
  6: '#C38445',
};

const TierNames = {
  1: 'Ruby',
  2: 'Diamond',
  3: 'Platinum',
  4: 'Gold',
  5: 'Silver',
  6: 'Bronze',
};

const PostWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

//임시 카테고리
const CategoryWrapper = styled.div`
  width: 300px;
  height: 675px;
  position: relative;
  margin-top: 100px;
  margin-right: 174px;
  background-color: yellow;
`;

function MyPage() {
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
            <a href="/mypage/following">
              {userData ? userData.following : ' '}
            </a>
          </UserFollower>
        </FollowerWrapper>
        <Button title="프로필 편집" className="grey" />
      </UserWrapper>
      <MyPageBarWrapper>
        <MyPageBar />
      </MyPageBarWrapper>

      <Wrapper>
        <TierWrapper>
          {userData && (
            <>
              <TierTitle color={TierTitleColors[userData.tier] || '#30180d'}>
                {TierNames[userData.tier] || 'Unknown Tier'}
              </TierTitle>
              <TierScore color={TierTitleColors[userData.tier] || '#30180d'}>
                {userData.score}
              </TierScore>
              <TierBar>
                <TierScoreBar
                  width={`${(userData.score / 100) * 100}%`}
                  color={TierBarColors[userData.tier] || '#30180d'}
                />
              </TierBar>
            </>
          )}
        </TierWrapper>
        <Wandubat />
        <PostWrapper>
          <CategoryWrapper>나중에 카테고리</CategoryWrapper>
          <PostList posts={post} pageType="mypage" />
        </PostWrapper>
      </Wrapper>
    </Container>
  );
}

export default MyPage;
