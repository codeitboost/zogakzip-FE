import { useState } from 'react';
import * as I from './InputText.style';

export default function InputText({ title, children }) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    // 유효성 검사
    const regex = /^[a-zA-Z0-9ㄱ-힣ㄱ-ㅎㅏ-ㅣ!@#$%^_]*$/;
    setIsValid(regex.test(newValue));
  };

  return (
    <I.Container isInvalid={!isValid}>
      <I.Title>{title}</I.Title>
      <I.Input placeholder={children} value={value} onChange={handleChange} isInvalid={!isValid} />
      {!isValid && <I.Error>특수문자는 !@#$%^_만 사용하실 수 있습니다.</I.Error>}
    </I.Container>
  );
}
