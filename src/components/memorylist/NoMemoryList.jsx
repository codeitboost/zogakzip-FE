import { useNavigate } from 'react-router-dom';
import * as N from './NoMemoryList.style';
import emptyIcon from '../../assets/img/empty.svg';
import Button from '../common/button/Button';

export default function NoMemoryList() {
  const navigate = useNavigate();
  const handleMemoryUpload = () => {
    navigate('/memory-upload');
  };

  return (
    <N.Container>
      <N.Image src={emptyIcon} alt="empty" />
      <N.Title>게시된 추억이 없습니다.</N.Title>
      <N.SubTitle>첫 번째 추억을 올려보세요!</N.SubTitle>
      <Button text="추억 올리기" onClick={handleMemoryUpload} />
    </N.Container>
  );
}
