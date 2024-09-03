import { useState } from 'react';
import InputText from '../../common/input/InputText';
import InputImage from '../../common/input/InputImage';
import TextArea from '../../common/input/TextArea';
import InputTag from '../../common/input/tag/InputTag';
import ToggleMenu from '../../common/toggle/ToggleMenu';
import * as M from './MemoryEditModal.style';
import Button from '../../common/button/Button';
import InputDate from '../../common/input/InputDate';

export default function MemoryEditModal({ selectedMemory, closeModal, onUpdateMemory }) {
  const [name, setName] = useState(selectedMemory.name);
  const [title, setTitle] = useState(selectedMemory.title);
  const [image, setImage] = useState('');
  const [content, setContent] = useState(selectedMemory.content);
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState(selectedMemory.location);
  const [date, setDate] = useState(selectedMemory.date);
  const [isPublic, setIsPublic] = useState(selectedMemory.isPublic);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleNameChange = (e) => setName(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleImageChange = (imageUrl) => {
    setImage(imageUrl);
  };

  const handleToggleChange = (newState) => {
    setIsPublic(newState);
  };

  // 수정하기 버튼 클릭 시 호출되는 함수
  const handleSubmit = () => {
    if (password !== selectedMemory.password) {
      setIsPasswordValid(false);
      console.log(password, selectedMemory.password);
    } else {
      const updatedMemory = {
        ...selectedMemory,
        name,
        title,
        content,
        location,
        date,
        isPublic,
        img: image || selectedMemory.img, // 새 이미지를 선택하지 않았다면 기존 이미지 유지
        tags, // 필요에 따라 tags 값을 추가로 다뤄야 함
      };

      // 부모 컴포넌트로 수정된 데이터 전달
      onUpdateMemory(updatedMemory);
      closeModal();
    }
  };

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
        <InputText title="장소" value={location} onChange={handleLocationChange}>
          장소를 입력해 주세요
        </InputText>
      </M.Row>
      <M.Row>
        <InputImage title="이미지" onImageChange={handleImageChange} />
        <M.Line />
        <InputDate value={date} onChange={handleDateChange} />
      </M.Row>
      <M.Row>
        <TextArea title="본문" value={content} onChange={handleContentChange}>
          본문 내용을 입력해 주세요
        </TextArea>
        <M.LastLine />
        <div>
          <ToggleMenu title="추억 공개 선택" onToggleChange={handleToggleChange} />
          <InputText title="수정 권한 인증" value={password} onChange={handlePasswordChange}>
            비밀번호를 입력해 주세요
          </InputText>
          {!isPasswordValid && <M.Error>비밀번호가 일치하지 않습니다.</M.Error>}
        </div>
      </M.Row>
      <M.Button>
        <Button text="수정하기" onClick={handleSubmit} />
      </M.Button>
    </M.Container>
  );
}
