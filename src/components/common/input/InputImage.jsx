import React, { useRef, useState } from 'react';
import * as I from './InputImage.style';

export default function InputImage({ title }) {
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <I.Container>
      <I.Title>{title}</I.Title>
      <I.Select>
        <I.Input value={fileName} placeholder="파일을 선택해 주세요" readOnly />
        <I.Button onClick={handleButtonClick}>파일 선택</I.Button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="image/*"
        />
      </I.Select>
    </I.Container>
  );
}
