import Toggle from './Toggle';
import * as T from './ToggleMenu.style';

export default function ToggleMenu({ title }) {
  return (
    <T.Container>
      <T.Title>{title}</T.Title>
      <T.Select>
        <T.SelectState>공개</T.SelectState>
        <Toggle />
      </T.Select>
    </T.Container>
  );
}
