import Button from '../../components/common/button/Button';
import InputImage from '../../components/common/input/InputImage';
import InputTag from '../../components/common/input/tag/InputTag';
import InputText from '../../components/common/input/InputText';
import TextArea from '../../components/common/input/TextArea';
import ToggleMenu from '../../components/common/toggle/ToggleMenu';
import * as M from './MemoryUpload.style';

export default function MemoryUpload() {
  return (
    <M.Container>
      <M.Title>추억 올리기</M.Title>
      <M.Row>
        <InputText title="닉네임">닉네임을 입력해 주세요</InputText>
        <M.Line />
        <InputTag />
      </M.Row>
      <M.Row>
        <InputText title="제목">제목을 입력해 주세요</InputText>
        <M.Line />
        <InputText title="장소">장소를 입력해 주세요</InputText>
      </M.Row>
      <M.Row>
        <InputImage />
        <M.Line />
        <InputText title="추억의 순간">추억의 순간을 입력해 주세요</InputText>
      </M.Row>
      <M.Row>
        <TextArea />
        <M.LastLine />
        <div>
          <ToggleMenu title="추억 공개 선택" />
          <InputText title="비밀번호">비밀번호를 입력해 주세요</InputText>
        </div>
      </M.Row>
      <M.Button>
        <Button text="수정하기" />
      </M.Button>
    </M.Container>
  );
}
