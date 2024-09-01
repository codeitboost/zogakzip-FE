import { useState } from 'react';
import Button from '../../common/button/Button';
import InputText from '../../common/input/InputText';
import TextArea from '../../common/input/TextArea';
import * as C from './CommentEditModal.style';

export default function CommentEditModal({ id, commentName, commentText, commentPassword, onEdit, closeModal }) {
  const [name, setName] = useState(commentName);
  const [comment, setComment] = useState(commentText);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleNameChange = (e) => setName(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = () => {
    console.log(password, commentPassword);
    if (password === commentPassword) {
      console.log('Submitting Edit:', id, name, comment);
      onEdit(name, comment);
      closeModal();
    } else {
      setIsPasswordValid(false);
    }
  };

  return (
    <C.Container>
      <div>
        <InputText title="닉네임" value={name} onChange={handleNameChange}>
          {commentName}
        </InputText>
        <TextArea title="댓글" value={comment} onChange={handleCommentChange}>
          {commentText}
        </TextArea>
        <InputText title="비밀번호" value={password} onChange={handlePasswordChange}>
          비밀번호를 입력해 주세요
        </InputText>
        {!isPasswordValid && <C.Error>비밀번호가 일치하지 않습니다.</C.Error>}
      </div>
      <Button text="등록하기" onClick={handleSubmit} />
    </C.Container>
  );
}
