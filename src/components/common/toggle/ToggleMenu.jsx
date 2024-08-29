import { useState } from 'react';
import Toggle from './Toggle';
import * as T from './ToggleMenu.style';

export default function ToggleMenu({ title }) {
  const [state, setState] = useState(false);

  const handleToggleClick = () => {
    setState(!state);
  };

  return (
    <T.Container>
      <T.Title>{title}</T.Title>
      <T.Select state={state}>
        <T.SelectState>{!state ? '비공개' : '공개'}</T.SelectState>
        <Toggle state={state} onClick={handleToggleClick} />
      </T.Select>
    </T.Container>
  );
}
