import Button from '../../components/common/button/Button';
import InputImage from '../../components/common/input/InputImage';
import InputText from '../../components/common/input/InputText';
import TextArea from '../../components/common/input/TextArea';
import Toggle from '../../components/common/toggle/Toggle';
import * as G from './GroupCreate.style';

export default function GroupCreate() {
  return (
    <G.Container>
      <G.Title>그룹 만들기</G.Title>
      <InputText title="그룹명">그룹 이름을 입력해 주세요</InputText>
      <InputImage />
      <TextArea />
      <G.Public>
        <G.PublicTitle>그룹 공개 선택</G.PublicTitle>
        <G.PublicSelect>
          <G.PublicSelectState>공개</G.PublicSelectState>
          <Toggle />
        </G.PublicSelect>
      </G.Public>
      <InputText title="비밀번호">비밀번호를 입력해 주세요</InputText>
      <Button text="만들기" width="400px" height="50px" fontsize="16px" />
    </G.Container>
  );
}
