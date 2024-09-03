import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 초기 상태를 null로 설정
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 초기 로그인 상태를 false로 설정

  useEffect(() => {
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
  }, []);

  useEffect(() => {
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
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
