//게시글 작성 page
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import TitleBar from '../components/bars/TitleBar';
import Button from '../style/Button';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import FormatStrikethroughOutlinedIcon from '@mui/icons-material/FormatStrikethroughOutlined';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import IconButton from '@mui/material/IconButton';

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

const TagContainer = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TagField = styled.input`
  min-width: 542px;
  height: 30px;
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

const ToolButton = styled.button`
  height: 24px;
  border: none;
  background: none;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: #c4c4c4;
  cursor: pointer;
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
  padding: 10px 0px;
  border-top: 1px solid #c4c4c4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;
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
  const mainFieldRef = useRef(null);

  //useRef hook : 참조 관리, mutable 객체 반환, 리렌더링 시 변화 x

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

    if (e.key === 'Backspace' && tagInput === '') {
      setTags((prevTags) => prevTags.slice(0, -1)); // 마지막 태그 삭제
    }
  };

  const handleMainChange = (e) => {
    setMain(e.target.value);
  };

  const addHeader = (level) => {
    const markdownHeader = `${'#'.repeat(level)} `;
    setMain((prevMain) => prevMain + markdownHeader);

    setTimeout(() => {
      const textarea = mainFieldRef.current;
      textarea.focus();
      const cursorPosition = markdownHeader.length + main.length; // 커서 위치
      textarea.setSelectionRange(cursorPosition, cursorPosition);
    }, 0);
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
      <TagContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
        <TagField
          type="text"
          value={tagInput}
          onChange={handleTagChange}
          onKeyDown={handleKeyDown}
          placeholder="태그 입력 후 엔터 키를 누르세요"
        />
      </TagContainer>
      <ToolBar>
        <ToolButton onClick={() => addHeader(1)}>H1</ToolButton>
        <ToolButton onClick={() => addHeader(2)}>H2</ToolButton>
        <ToolButton onClick={() => addHeader(3)}>H3</ToolButton>
        <ToolButton onClick={() => addHeader(3)}>H4</ToolButton>

        <ToolLine />

        <IconButton>
          <FormatBoldOutlinedIcon
            sx={{
              size: '24px',
              color: '#C4C4C4',
            }}
          />
        </IconButton>
        <IconButton>
          <FormatItalicOutlinedIcon
            sx={{
              size: '24px',
              color: '#C4C4C4',
            }}
          />
        </IconButton>
        <IconButton>
          <FormatStrikethroughOutlinedIcon
            sx={{
              size: '24px',
              color: '#C4C4C4',
            }}
          />
        </IconButton>

        <ToolLine />

        <IconButton>
          <FormatQuoteOutlinedIcon
            sx={{
              size: '24px',
              color: '#C4C4C4',
            }}
          />
        </IconButton>
        <IconButton>
          <InsertLinkOutlinedIcon
            sx={{
              size: '24px',
              color: '#C4C4C4',
            }}
          />
        </IconButton>
        <IconButton>
          <CropOriginalIcon
            sx={{
              size: '24px',
              color: '#C4C4C4',
            }}
          />
        </IconButton>
        <IconButton>
          <CodeOutlinedIcon
            sx={{
              size: '24px',
              color: '#C4C4C4',
            }}
          />
        </IconButton>
      </ToolBar>
      <MainField
        ref={mainFieldRef}
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
