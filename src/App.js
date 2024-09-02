import React from 'react';
import Router from './routes/Router';
import { UserProvider } from './components/user/UserContext';

//추후에 router 파일 분리할 예정
function App(props) {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
