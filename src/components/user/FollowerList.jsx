import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FollowItem from './FollowItem';

// Post Item을 그리드 형식으로 출력
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(60px, 1fr)); // 세로로 나열
  gap: 16px;
  justify-items: center;
  height: auto; // 콘텐츠에 맞게 높이 자동 조정
`;

function FollowerList({ props }) {
  const { userId } = props;
  const [follower, setFollower] = useState([]);

  useEffect(() => {
    const fetchFollower = async () => {
      try {
        const response = await fetch(
          `http://3.37.43.129/api/user/${userId}/followers`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const data = await response.json();
        setFollower(data);
      } catch (error) {
        console.error('Error fetching follower list:', error);
      }
    };

    fetchFollower();
  }, []);

  return (
    <Container>
      <Wrapper>
        {follower.map((user) => (
          <FollowItem key={user.id} userId={follower.followerId} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default FollowerList;
