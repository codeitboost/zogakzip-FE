import { useState } from 'react';
import * as T from './Toggle.style';

export default function Toggle() {
  const [state, setState] = useState(false);

  const handleToggle = () => {
    setState(!state);
  };

  return (
    <T.Container state={state} onClick={handleToggle}>
      <T.Circle state={state} />
    </T.Container>
  );
}
