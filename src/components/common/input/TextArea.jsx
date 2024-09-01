import * as T from './TextArea.style';

export default function TextArea({ title, children, value, onChange }) {
  return (
    <T.Container>
      <T.Title>{title}</T.Title>
      <T.Input placeholder={children} value={value} onChange={onChange} />
    </T.Container>
  );
}
