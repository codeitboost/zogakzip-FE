import React, { useRef } from 'react';
import * as I from './InputDate.style';
import dateIcon from '../../../assets/img/date.svg';

export default function InputDate({ value, onChange }) {
  const dateInputRef = useRef(null);

  const handleDateChange = (event) => {
    if (onChange) {
      onChange(event); // 부모 컴포넌트에 변경된 날짜 전달
    }
  };

  const handleButtonClick = () => {
    dateInputRef.current?.showPicker(); // 날짜 선택 창 열기
  };

  return (
    <I.Container>
      <I.Title>추억의 순간</I.Title>
      <I.Input type="date" ref={dateInputRef} value={value} onChange={handleDateChange} placeholder="YYYY-MM-DD" />
      <I.Button type="button" onClick={handleButtonClick}>
        <I.Icon src={dateIcon} alt="date" />
      </I.Button>
    </I.Container>
  );
}
