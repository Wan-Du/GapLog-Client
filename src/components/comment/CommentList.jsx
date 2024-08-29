//댓글을 모두 출력하는 list 컴포넌트

import React, { useEffect, useState } from 'react';
import CommentItem from './CommentItem';

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const [hiddenComments, setHiddenComments] = useState({}); // 댓글 숨김 상태 관리

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/posts/${postId}`);
        const data = await response.json();

        if (data.status === '200') {
          setComments(data.comments);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('댓글을 불러오는 데 오류가 발생했습니다:', error);
      }
    };

    fetchComments();
  }, [postId]);

  const toggleHideComment = (commentId) => {
    setHiddenComments((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  return (
    <div>
      {comments.map((comment) => (
        <CommentItem
          key={comment.comment_id}
          comment={comment}
          hasReplies={false} // 자식 댓글 여부는 API에 따라 추가적으로 설정
          onToggleHide={() => toggleHideComment(comment.comment_id)}
        />
      ))}
    </div>
  );
}

export default CommentList;
