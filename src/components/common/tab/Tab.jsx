import * as T from './Tab.style';

export default function Tab({ text, isActive, onClick }) {
  return (
    <T.Tab
      onClick={onClick}
      isActive={isActive} // isActive prop을 스타일에 전달
    >
      {text}
    </T.Tab>
  );
}
