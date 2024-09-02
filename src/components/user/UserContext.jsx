import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // 로그인 상태를 상태로 관리
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  useEffect(() => {
    // user가 변경될 때마다 로그인 상태 업데이트 및 로컬 스토리지에 저장
    if (user) {
      console.log('user 존재');
      console.log(user);
      setIsLoggedIn(true);
      localStorage.setItem('user', JSON.stringify(user)); // 사용자 정보를 로컬 스토리지에 저장
    } else {
      setIsLoggedIn(false);
      localStorage.removeItem('user'); // 사용자 정보가 없을 경우 로컬 스토리지에서 삭제
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
