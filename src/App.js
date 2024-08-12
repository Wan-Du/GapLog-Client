import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";


//추후에 router 파일 분리할 예정
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
