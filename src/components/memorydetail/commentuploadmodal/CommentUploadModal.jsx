import { useState } from 'react';
import Button from '../../common/button/Button';
import InputText from '../../common/input/InputText';
import TextArea from '../../common/input/TextArea';
import * as C from './CommentUploadModal.style';

export default function CommentUploadModal({ addComment, closeModal }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = () => {
    if (name.trim() && comment.trim()) {
      addComment(name, comment, password);
      closeModal();
    }
  };

  return (
    <C.Container>
      <div>
        <InputText title="닉네임" value={name} onChange={handleNameChange}>
          닉네임을 입력해 주세요
        </InputText>
        <TextArea title="댓글" value={comment} onChange={handleCommentChange}>
          댓글을 입력해 주세요
        </TextArea>
        <InputText title="비밀번호" value={password} onChange={handlePasswordChange}>
          비밀번호를 입력해 주세요
        </InputText>
      </div>
      <Button text="등록하기" onClick={handleSubmit} />
    </C.Container>
  );
}
