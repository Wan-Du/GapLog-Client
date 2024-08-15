import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 320px;
    height: 376px;
    border-radius: 4px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .04);
    justify-content: left;
    cursor: pointer;
    :hover{
        background: lightgrey;
    }
`
const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

const ProfileImg = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 70%;
    overflow: hidden;
    margin-right: 16px;
    & > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const UserId = styled.div`
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 600;
`;

const Date = styled.div`
    color: #8c939c;
    font-family: "Inter", sans-serif;
    font-size: 11px;
    font-weight: 400;
`;

const PostImg = styled.div`
width: 100%;
height: 235px;
overflow: hidden;
margin-bottom: 10px;
& > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

const TitleText = styled.h1`
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
`;


const MainText = styled.p`
    font-family: "Inter", sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    height: 20px;
    margin: 0;
`;


function PostItem(props){
    const { post, onClick } = props;
    return(
        <Container onClick={onClick}>
        <UserWrapper>
            <ProfileImg>
                <img src={post.userprofile} alt="profile" />
            </ProfileImg>
            <UserInfo>
                <UserId>{post.userid}</UserId>
                <Date>{post.date}</Date>
            </UserInfo>
        </UserWrapper>
        <PostImg>
            <img src={post.userprofile} alt="profile" />
        </PostImg>
        <TitleText>{post.title}</TitleText>
        <MainText>{post.content}</MainText>
    </Container>
        
    );
}

export default PostItem;