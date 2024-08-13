import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from '../pages/MainPage'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage title="GabLog" />} />
                <Route path="/following" element={<MainPage title="팔로잉" />} />
                <Route path="/popular" element={<MainPage title="인기글" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;


