import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import MyPage from '../pages/MyPage';
import ViewPostPage from '../pages/ViewPostPage';
import WritePostPage from '../pages/WritePostPage';
import FollowListPage from '../pages/FollowListPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage title="GabLog" />} />
        {/* test: /mypage로 임시 url 설정 */}
        <Route path="/mypage" element={<MyPage />} />
        <Route
          path="/mypage/follower"
          element={<FollowListPage title="follower" />}
        />
        <Route
          path="/mypage/following"
          element={<FollowListPage title="following" />}
        />
        <Route path="/following" element={<MainPage title="팔로잉" />} />
        <Route path="/popular" element={<MainPage title="인기글" />} />
        <Route path="/posts/:postId" element={<ViewPostPage />} />
        <Route path="/write" element={<WritePostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
