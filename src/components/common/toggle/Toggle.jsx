import * as T from './Toggle.style';

export default function Toggle({ state, onClick }) {
  return (
    <T.Container state={state} onClick={onClick}>
      <T.Circle state={state} />
    </T.Container>
  );
}
