import * as I from './InputText.style';

export default function InputText({ title, children }) {
  return (
    <I.Container>
      <I.Title>{title}</I.Title>
      <I.Input placeholder={children} />
    </I.Container>
  );
}
