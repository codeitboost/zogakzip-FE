import { useState } from 'react';
import * as M from './MemoryComment.style';
import MemoryCommentItem from '../momorycommentitem/MemoryCommentItem';

export default function MemoryComment({ comments }) {
  return (
    <M.Container>
      <div>댓글 {comments.length}</div>
      <M.Line />
      {comments.map((comment) => (
        <MemoryCommentItem
          key={comment.id}
          name={comment.name}
          date={comment.date}
          password={comment.password} // 비밀번호 전달
          onEdit={(updatedName, updatedComment) => {
            console.log('Success.');
          }}
        >
          {comment.comment}
        </MemoryCommentItem>
      ))}
    </M.Container>
  );
}
