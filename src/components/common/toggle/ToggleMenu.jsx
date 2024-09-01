import { useState } from 'react';
import Toggle from './Toggle';
import * as T from './ToggleMenu.style';

export default function ToggleMenu({ title, onToggleChange }) {
  const [isPublic, setIsPublic] = useState(false);

  const handleToggleClick = () => {
    const newState = !isPublic;
    setIsPublic(newState);
    if (onToggleChange) {
      onToggleChange(newState);
    }
  };

  return (
    <T.Container>
      <T.Title>{title}</T.Title>
      <T.Select state={isPublic}>
        <T.SelectState>{!isPublic ? '비공개' : '공개'}</T.SelectState>
        <Toggle state={isPublic} onClick={handleToggleClick} />
      </T.Select>
    </T.Container>
  );
}
