import Toggle from './Toggle';
import * as T from './ToggleMenu.style';

export default function ToggleMenu() {
  return (
    <T.Container>
      <T.Title>그룹 공개 선택</T.Title>
      <T.Select>
        <T.SelectState>공개</T.SelectState>
        <Toggle />
      </T.Select>
    </T.Container>
  );
}
