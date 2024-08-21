import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../style/Button";
import { FiSearch, FiBell, FiSend} from "react-icons/fi";

//전체 모든 페이지에서 보여지는 gaplog 제목 bar
const Container = styled.div`
  width: calc(100% - 32px);
  max-width: 1200px;
  height: 40px;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const MainTitleText = styled.div`
  font-size: 24px;
  color: #30180d;
  font-family: "Russo One", Helvetica;
  font-weight: 400;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const ButtonWrapper = styled.div`
  display: flex; 
  align-items: center; 
  gap: 10px; 
  position: absolute;
  right: 0;
`;

const LoginButton = styled(Button)`
  margin-left: 0 auto;
`;

function TitleBar(props){
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    //api 호출한 뒤 로그인 상태 확인 예정
  });

  return(
    <Container>
      <MainTitleText>GapLog</MainTitleText>
      <ButtonWrapper>
        <FiSearch size="22" />
        {!isLoggedIn ? (
          <LoginButton title="로그인">로그인</LoginButton>
          ) : (
          <>
            <FiBell size="22" />
            <FiSend size="22" />
            <LoginButton title="새 글 작성">새 글 작성</LoginButton>
          </>
        )}
      </ButtonWrapper>
    </Container>
    );

}

export default TitleBar;