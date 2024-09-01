import { useState } from 'react';
import Button from '../../common/button/Button';
import InputText from '../../common/input/InputText';
import TextArea from '../../common/input/TextArea';
import * as C from './CommentEditModal.style';

export default function CommentEditModal({ commentName, commentText, commentPassword, onEdit, closeModal }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleNameChange = (e) => setName(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = () => {
    if (password === commentPassword) {
      onEdit(name, comment); // 수정 기능을 부모 컴포넌트에 전달
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
      <Button text="등록하기" />
    </C.Container>
  );
}
