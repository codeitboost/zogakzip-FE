import * as B from './Button.style';

export default function Button({ text, width, height }) {
  return (
    <B.Button type="button" width={width} height={height}>
      {text}
    </B.Button>
  );
}
