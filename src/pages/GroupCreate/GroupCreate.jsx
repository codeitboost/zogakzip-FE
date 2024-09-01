import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/Button';
import InputImage from '../../components/common/input/InputImage';
import InputText from '../../components/common/input/InputText';
import TextArea from '../../components/common/input/TextArea';
import ToggleMenu from '../../components/common/toggle/ToggleMenu';
import * as G from './GroupCreate.style';
import { GroupContext } from '../../components/groupcreate/GroupContext';

export default function GroupCreate() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const { addGroup } = useContext(GroupContext);

  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleImageChange = (imageUrl) => {
    setImage(imageUrl);
  };

  const handleSubmit = () => {
    const newGroup = {
      id: Date.now(), // 간단한 ID 생성
      img: image, // 필요시 이미지 URL 처리
      day: 0, // 기본값 설정
      isPublic: true, // 필요에 따라 처리
      title: name,
      content: '', // 필요에 따라 처리
      badge: 0, // 기본값 설정
      memory: 0, // 기본값 설정
      like: '0', // 기본값 설정
    };
    addGroup(newGroup);
    navigate('/');
  };

  return (
    <G.Container>
      <G.Title>그룹 만들기</G.Title>
      <InputText title="그룹명" value={name} onChange={handleNameChange}>
        그룹 이름을 입력해 주세요
      </InputText>
      <InputImage title="대표 이미지" onImageChange={handleImageChange} />
      <TextArea title="그룹 소개">그룹을 소개해 주세요</TextArea>
      <ToggleMenu title="그룹 공개 선택" />
      <InputText title="비밀번호" value={password} onChange={handlePasswordChange}>
        비밀번호를 입력해 주세요
      </InputText>
      <Button text="만들기" width="400px" height="50px" fontsize="16px" onClick={handleSubmit} />
    </G.Container>
  );
}
