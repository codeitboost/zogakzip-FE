import { useState } from 'react';
import * as T from './Tab.style';

export default function Tab({ text }) {
  // on, off 설정
  const [state, setState] = useState(true);

  // 클릭 시 상태 토글
  const toggleTab = () => {
    setState(!state);
  };

  return (
    <T.Tab state={state} onClick={toggleTab}>
      {text}
    </T.Tab>
  );
}
