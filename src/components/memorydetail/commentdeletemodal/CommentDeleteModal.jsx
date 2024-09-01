import { useState } from 'react';
import Button from '../../common/button/Button';
import InputText from '../../common/input/InputText';
import * as M from './CommentDeleteModal.style';

export default function CommentDeleteModal({ commentPassword, deleteComment, closeModal }) {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleDelete = () => {
    if (password === commentPassword) {
      deleteComment();
      closeModal();
    } else {
      setIsPasswordValid(false);
    }
  };

  return (
    <M.Container>
      <InputText title="삭제 권한 인증" value={password} onChange={handlePasswordChange}>
        비밀번호를 입력해 주세요
      </InputText>
      {!isPasswordValid && <M.Error>비밀번호가 일치하지 않습니다.</M.Error>}
      <Button text="삭제하기" onClick={handleDelete} />
    </M.Container>
  );
}
