import React from "react";
import styled from "styled-components";
import Button from "../../style/Button";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  max-width: 1200px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainTitleText = styled.p`
  font-size: 24px;
  color: #30180d;
  font-family: "Russo One", Helvetica;
  font-weight: 400;
  margin: 0 auto;
`;

const LoginButton = styled(Button)`
  margin-left: auto;
`;

function TitleBar(props){
    return(
        <Wrapper>
          <MainTitleText>GapLog</MainTitleText>
          <LoginButton title="로그인"></LoginButton>
        </Wrapper>
    );

}

export default TitleBar;