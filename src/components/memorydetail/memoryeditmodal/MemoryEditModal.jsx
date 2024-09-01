import { useState } from 'react';
import InputText from '../../common/input/InputText';
import InputImage from '../../common/input/InputImage';
import TextArea from '../../common/input/TextArea';
import InputTag from '../../common/input/tag/InputTag';
import ToggleMenu from '../../common/toggle/ToggleMenu';
import * as M from './MemoryEditModal.style';
import Button from '../../common/button/Button';

export default function MemoryEditModal() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  const [time, setTime] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handlePlaceChange = (e) => setPlace(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <M.Container>
      <M.Row>
        <InputText title="닉네임" value={name} onChange={handleNameChange}>
          닉네임을 입력해 주세요
        </InputText>
        <M.Line />
        <InputTag />
      </M.Row>
      <M.Row>
        <InputText title="제목" value={title} onChange={handleTitleChange}>
          제목을 입력해 주세요
        </InputText>
        <M.Line />
        <InputText title="장소" value={place} onChange={handlePlaceChange}>
          장소를 입력해 주세요
        </InputText>
      </M.Row>
      <M.Row>
        <InputImage title="이미지" />
        <M.Line />
        <InputText title="추억의 순간" value={time} onChange={handleTimeChange}>
          추억의 순간을 입력해 주세요
        </InputText>
      </M.Row>
      <M.Row>
        <TextArea title="본문">본문 내용을 입력해 주세요</TextArea>
        <M.LastLine />
        <div>
          <ToggleMenu title="추억 공개 선택" />
          <InputText title="수정 권한 인증" value={password} onChange={handlePasswordChange}>
            비밀번호를 입력해 주세요
          </InputText>
        </div>
      </M.Row>
      <M.Button>
        <Button text="수정하기" />
      </M.Button>
    </M.Container>
  );
}
