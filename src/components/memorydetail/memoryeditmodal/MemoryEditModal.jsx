import InputText from '../../common/input/InputText';
import InputImage from '../../common/input/InputImage';
import TextArea from '../../common/input/TextArea';
import InputTag from '../../common/input/tag/InputTag';
import ToggleMenu from '../../common/toggle/ToggleMenu';
import * as M from './MemoryEditModal.style';
import Button from '../../common/button/Button';

export default function MemoryEditModal() {
  return (
    <M.Container>
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
        <InputImage title="이미지" />
        <M.Line />
        <InputText title="추억의 순간">추억의 순간을 입력해 주세요</InputText>
      </M.Row>
      <M.Row>
        <TextArea title="본문">본문 내용을 입력해 주세요</TextArea>
        <M.LastLine />
        <div>
          <ToggleMenu title="추억 공개 선택" />
          <InputText title="수정 권한 인증">비밀번호를 입력해 주세요</InputText>
        </div>
      </M.Row>
      <M.Button>
        <Button text="수정하기" />
      </M.Button>
    </M.Container>
  );
}
