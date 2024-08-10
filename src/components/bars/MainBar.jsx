import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex; 
    justify-content: left; 
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px; /* 항목 간 간격 추가 */
    height: 50px;
    font-size: 18px;
    color: #30180d;
    font-family: "Inter", sans-serif;
    font-weight: 800;
`

function MainBar(){
    return(
        <Container>
            <Wrapper>
                <p>GabLog</p>
                <p>팔로잉</p>
                <p>인기글</p>
            </Wrapper>
        </Container>
    )
}

export default MainBar;