//mypage에서 보여질 user의 following list 컴포넌트
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FollowItem from './FollowItem';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
  gap: 16px;
  justify-items: center;
  height: auto;
`;

function FollowingList({ props }) {
  const { userId } = props;
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const response = await fetch(
          `http://3.37.43.129/api/user/${userId}/followees`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const data = await response.json();
        setFollowing(data);
      } catch (error) {
        console.error('Error fetching following list:', error);
      }
    };

    fetchFollowing();
  }, []);

  return (
    <Container>
      <Wrapper>
        {following.map((user) => (
          <FollowItem key={user.id} userId={following.followeeId} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default FollowingList;
