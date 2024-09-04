import React, { useState } from 'react';
import * as S from './GroupAccess.style';
import Button from '../../components/common/button/Button';
import InputText from '../../components/common/input/InputText';

export default function GroupAccess() {
  const [password, setPassword] = useState('');
  const [placeholder, setPlaceholder] = useState('그룹 비밀번호를 입력해 주세요.');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    if (password === '') {
      setPlaceholder('그룹 비밀번호를 입력해 주세요.');
    }
  };

  return (
    <S.Container>
      <S.Title>비공개 그룹</S.Title>
      <S.Subtitle>비공개 그룹에 접근하기 위해 권한 확인이 필요합니다</S.Subtitle>
      <S.PasswordContainer>
        <InputText title="비밀번호를 입력해 주세요" onChange={handlePasswordChange}>
          비밀번호를 입력해 주세요
        </InputText>
        <Button text="제출하기" fontsize="16px" />
      </S.PasswordContainer>
    </S.Container>
  );
}
