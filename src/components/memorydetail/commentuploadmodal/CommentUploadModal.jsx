import Button from '../../common/button/Button';
import InputText from '../../common/input/InputText';
import TextArea from '../../common/input/TextArea';
import * as C from './CommentUploadModal.style';

export default function CommentUploadModal() {
  return (
    <C.Container>
      <div>
        <InputText title="닉네임">닉네임을 입력해 주세요</InputText>
        <TextArea title="댓글">댓글을 입력해 주세요</TextArea>
        <InputText title="비밀번호">비밀번호를 입력해 주세요</InputText>
      </div>
      <Button text="등록하기" />
    </C.Container>
  );
}
