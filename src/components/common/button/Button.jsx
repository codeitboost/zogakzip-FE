import * as B from './Button.style';

export default function Button({ text, width, height, fontsize, onClick }) {
  return (
    <B.Button type="button" width={width} height={height} fontsize={fontsize} onClick={onClick}>
      {text}
    </B.Button>
  );
}
