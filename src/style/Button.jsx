import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 117px;
    height: 40px;
    font-family: "Inter-Regular", Helvetica;
    padding: 6px 12px;
    color: #30180d;
    font-weight: 400;
    background-color: #eeddbb;
    border-radius: 8px;
    font-size: 16px;
    border: 1px solid #eeddbb;
    display: inline-block;
    text-align: center;
`;

function Button(props) {
    const {title, onClick} = props;
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;