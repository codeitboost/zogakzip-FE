import * as B from './Button.style';

export default function Button({ text, width, height, fontsize }) {
  return (
    <B.Button type="button" width={width} height={height} fontsize={fontsize}>
      {text}
    </B.Button>
  );
}
