import { useNavigate } from 'react-router-dom';
import * as N from './NoGroupList.style';
import emptyIcon from '../../assets/img/empty.svg';
import Button from '../../components/common/button/Button';

export default function NoGroupList() {
  const navigate = useNavigate();
  const handleGroupCreate = () => {
    navigate('/group-create');
  };

  return (
    <N.Container>
      <N.Image src={emptyIcon} alt="empty" />
      <N.Title>등록된 공개 그룹이 없습니다.</N.Title>
      <N.SubTitle>가장 먼저 그룹을 만들어보세요!</N.SubTitle>
      <Button text="그룹 만들기" onClick={handleGroupCreate} />
    </N.Container>
  );
}
