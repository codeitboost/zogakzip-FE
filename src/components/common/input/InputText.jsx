import { useState } from 'react';
import * as I from './InputText.style';

export default function InputText({ title, children, value, onChange }) {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(event); // 부모 컴포넌트의 상태 업데이트를 호출합니다.

    // 유효성 검사
    const regex = /^[a-zA-Z0-9ㄱ-힣ㄱ-ㅎㅏ-ㅣ!@#$%^_ ]*$/;
    if (regex.test(newValue)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <I.Container isInvalid={!isValid}>
      <I.Title>{title}</I.Title>
      <I.Input placeholder={children} value={value} onChange={handleChange} isInvalid={!isValid} />
      {!isValid && <I.Error>특수문자는 !@#$%^_만 사용하실 수 있습니다.</I.Error>}
    </I.Container>
  );
}
