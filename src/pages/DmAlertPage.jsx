//title bar에서 dm icon 클릭했을 때 보여지는 page
import React, { useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  width: 609px;
  height: 944px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ListWrapper = styled.div`
  width: 234px;
  min-height: 100%;
  border: 1px solid #dddfe0;
  box-sizing: border-box;
  margin: 0 3px;
  padding: 0 10px;
  justify-content: column;
`;

const ListTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 700;
    width: 50px;
    margin-right: 80px;
    text-align: left;
    display: inline-block;
  }
`;

//사용자 목록 요소
const Messenger = styled.div``;

const MainWrapper = styled.div`
  width: 326px;
  height: 865px;
  border: 1px solid #dddfe0;
  box-sizing: border-box;
  margin: 0 3px;
  padding: 0 10px;
  justify-content: column;
`;

const UserTitle = styled.div`
  width: 100%;
  height: 38px;
  border-bottom: 1px solid #dddfe0;

  & > p {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    width: 42px;
    text-align: left;
    display: inline-block;
  }
`;

const BodyWrapper = styled.div`
  width: 100%;
  min-height: 300px;
`;

const Message = styled.div``;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const MessageInput = styled.input`
  width: 80%;
  position: relative;
  overflow: hidden;
  height: 15px;
  font-family: 'Inter', sans-serif;
`;

const SendButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-family: 'Inter', sans-serif;
`;

function DmAlertPage({ isOpen, onClose }) {
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSendMessage = () => {
    setMessage('');
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <IconButton
          onClick={onClose}
          sx={{
            width: '20px',
            height: '20px',
            marginLeft: '589px',
            marginBottom: '10px',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Wrapper>
          <ListWrapper>
            <ListTitle>
              <p>Message</p>
              <EditIcon />
            </ListTitle>
          </ListWrapper>
          <MainWrapper>
            <UserTitle>
              <p>nickname</p>
            </UserTitle>
            <BodyWrapper></BodyWrapper>
            <InputWrapper>
              <MessageInput
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <SendButton onClick={handleSendMessage}>보내기</SendButton>
            </InputWrapper>
          </MainWrapper>
        </Wrapper>
      </ModalContainer>
    </ModalOverlay>
  );
}

DmAlertPage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DmAlertPage;
