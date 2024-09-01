import { useState } from 'react';
import * as M from './MemoryComment.style';
import MemoryCommentItem from '../momorycommentitem/MemoryCommentItem';

export default function MemoryComment({ comments, editComment, deleteComment }) {
  return (
    <M.Container>
      <div>댓글 {comments.length}</div>
      <M.Line />
      {comments.map((comment) => (
        <MemoryCommentItem
          key={comment.id}
          id={comment.id}
          name={comment.name}
          date={comment.date}
          password={comment.password}
          editComment={editComment}
          deleteComment={deleteComment}
        >
          {comment.comment}
        </MemoryCommentItem>
      ))}
    </M.Container>
  );
}
