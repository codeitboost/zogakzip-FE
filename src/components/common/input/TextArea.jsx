import * as T from './TextArea.style';

export default function TextArea({ title, children }) {
  return (
    <T.Container>
      <T.Title>{title}</T.Title>
      <T.Input placeholder={children} />
    </T.Container>
  );
}
