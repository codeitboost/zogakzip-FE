import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/Button';
import InputImage from '../../components/common/input/InputImage';
import InputTag from '../../components/common/input/tag/InputTag';
import InputText from '../../components/common/input/InputText';
import TextArea from '../../components/common/input/TextArea';
import ToggleMenu from '../../components/common/toggle/ToggleMenu';
import * as M from './MemoryUpload.style';
import { MemoryContext } from './MemoryContext';

export default function MemoryUpload() {
  const navigate = useNavigate();
  const { addMemory } = useContext(MemoryContext);

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [password, setPassword] = useState('');

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

  const handleSubmit = () => {
    const newMemory = {
      id: Date.now(), // 간단한 ID 생성
      name,
      title,
      img: image,
      content,
      tags,
      isPublic,
      location,
      date,
      like: 0,
      comment: 0,
    };
    addMemory(newMemory);
    navigate('/group-detail');
  };

  return (
    <M.Container>
      <M.Title>추억 올리기</M.Title>
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
        <InputText title="추억의 순간" value={date} onChange={handleDateChange}>
          추억의 순간을 입력해 주세요
        </InputText>
      </M.Row>
      <M.Row>
        <TextArea title="본문" value={content} onChange={handleContentChange}>
          본문 내용을 입력해 주세요
        </TextArea>
        <M.LastLine />
        <div>
          <ToggleMenu title="추억 공개 선택" onToggleChange={handleToggleChange} />
          <InputText title="비밀번호" value={password} onChange={handlePasswordChange}>
            비밀번호를 입력해 주세요
          </InputText>
        </div>
      </M.Row>
      <M.Button>
        <Button text="올리기" onClick={handleSubmit} />
      </M.Button>
    </M.Container>
  );
}
