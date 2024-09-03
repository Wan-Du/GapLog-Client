import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// 카테고리 컴포넌트
const CategoryContainer = styled.div`
  width: 300px;
  height: 675px;
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
`;

const CategoryTitle = styled.div`
  font-size: 18px;
  color: #30180d;
  margin-bottom: 20px;
`;

const CategoryNavItem = styled(NavLink)`
  display: block;
  padding: 10px 0;
  text-decoration: none;
  color: #30180d;
  opacity: 0.7;

  &.active {
    opacity: 1;
    font-weight: bold;
  }

  &:hover {
    text-decoration: underline;
  }
`;

// To Do: 하위 카테고리 표시
function Category({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch('http://3.37.43.129/api/category/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          // Authorization 헤더에 accessToken 추가
          // To Do : 유저 아이디가 필요한 경우, 로그인 시 localStorage에 저장된 userId를 사용하도록 모든 fetch 요청에 추가
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      console.log('Categories Data:', data);
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleClick = async (categoryId) => {
    try {
      const response = await fetch(
        `http://3.37.43.129/api/category/${categoryId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      // To Do: 받아온 게시글 데이터로 페이지 렌더링
      const data = await response.json();
      console.log('Post Data:', data);
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  };

  return (
    <CategoryContainer>
      <CategoryTitle>시리즈</CategoryTitle>
      <nav>
        {categories.map((category) => (
          <CategoryNavItem
            key={category.id}
            onClick={() => handleClick(category.id)}
          >
            {category.name}
          </CategoryNavItem>
        ))}
      </nav>
    </CategoryContainer>
  );
}

export default Category;
