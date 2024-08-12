import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage"; // MainPage에서 MainBar를 포함

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage title="GabLog" />} />
                <Route path="/following" element={<MainPage title="팔로잉" />} />
                <Route path="/popular" element={<MainPage title="인기글" />} />
            </Routes>
        </Router>
    );
}

export default App;


