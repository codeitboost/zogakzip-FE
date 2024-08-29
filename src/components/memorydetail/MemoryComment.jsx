import * as M from './MemoryComment.style';
import MemoryCommentItem from './MemoryCommentItem';

export default function MemoryComment() {
  return (
    <M.Container>
      <div>댓글 8</div>
      <M.Line />
      <MemoryCommentItem />
      <MemoryCommentItem />
      <MemoryCommentItem />
    </M.Container>
  );
}
