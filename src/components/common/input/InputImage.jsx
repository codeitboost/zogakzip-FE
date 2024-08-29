import * as I from './InputImage.style';

export default function InputImage() {
  return (
    <I.Container>
      <I.Title>대표 이미지</I.Title>
      <I.Select>
        <I.Input placeholder="파일을 선택해 주세요" />
        <I.Button>파일 선택</I.Button>
      </I.Select>
    </I.Container>
  );
}
