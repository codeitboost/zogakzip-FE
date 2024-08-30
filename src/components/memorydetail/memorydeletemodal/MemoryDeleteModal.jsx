import { useState } from 'react';
import Button from '../../common/button/Button';
import InputText from '../../common/input/InputText';
import * as M from './MemoryDeleteModal.style';

export default function MemoryDeleteModal() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <M.Container>
      <InputText title="삭제 권한 인증" value={password} onChange={handlePasswordChange}>
        비밀번호를 입력해 주세요
      </InputText>
      <Button text="삭제하기" />
    </M.Container>
  );
}
