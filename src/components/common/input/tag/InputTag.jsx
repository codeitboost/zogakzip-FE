import { useState } from 'react';
import * as I from './InputTag.style';
import InputTagItem from './InputTagItem';

export default function InputTag() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleEnter = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setInputValue('');
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <I.Container>
      <I.Title>태그</I.Title>
      <I.Input placeholder="태그 입력 후 Enter" value={inputValue} onChange={handleChange} onKeyPress={handleEnter} />
      <I.Tag>
        {tags.map((tag, index) => (
          <InputTagItem key={tag} tag={tag} onDelete={() => handleDelete(index)} />
        ))}
      </I.Tag>
    </I.Container>
  );
}
