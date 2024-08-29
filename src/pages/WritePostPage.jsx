//게시글 작성 page
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TitleBar from '../components/bars/TitleBar';
import Button from '../style/Button';
const Container = styled.div`
  width: calc(100% - 32px);
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const TitleField = styled.input`
  height: 50px;
  width: 542px;
  outline: none;
  border: none;
  background-color: none;
  font-family: 'Inter', sans-serif;
  font-size: 28px;
  font-weight: bold;
`;

const TagField = styled.input`
  height: 30px;
  width: 542px;
  margin: 18px 0;
  outline: none;
  border: none;
  background-color: none;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  background-color: #eeddbb;
  color: black;
  border-radius: 100px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: bold;
`;

const ToolBar = styled.div`
  height: 30px;
  width: 542px;
  margin: 18px 0;
  display: flex;
  align-items: center;
`;

const ToolLine = styled.div`
  width: 1px;
  height: 1.25rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background: #dee2e6;
`;

const MainField = styled.textarea`
  height: 500px;
  width: 100%;
  margin: 18px 0;
  outline: none;
  border: none;
  background-color: none;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  resize: none; // 크기 조절 비활성화
`;

const BottomBar = styled.div`
  width: calc(100% - 32px);
  max-width: 1200px;
  height: 40px;
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const BackButton = styled.button`
  width: 70px;
  border: none;
  background: none;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
`;

const UploadButton = styled(Button)`
  margin-left: 0 auto;
  cursor: pointer;
`;

function WritePostPage() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [main, setMain] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      setTags((prevTags) => [...prevTags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleMainChange = (e) => {
    setMain(e.target.value);
  };

  return (
    <Container>
      <TitleBar />
      <TitleField
        type="text"
        onChange={handleTitleChange}
        value={title}
        placeholder="제목을 입력하세요"
      />
      <TagField
        type="text"
        value={tagInput}
        onChange={handleTagChange}
        onKeyDown={handleKeyDown}
        placeholder="태그 입력 후 엔터 키를 누르세요"
      />
      <div>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
      <ToolBar>
        <ToolLine />
      </ToolBar>
      <MainField
        onChange={handleMainChange}
        value={main}
        placeholder="진지하지 않은 이야기를 적어보세요!"
      />
      <BottomBar>
        <BackButton>나가기</BackButton>
        <UploadButton title="업로드" />
      </BottomBar>
    </Container>
  );
}

export default WritePostPage;
