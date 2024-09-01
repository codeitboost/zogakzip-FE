import { useParams } from 'react-router-dom';

export default function GroupDetail() {
  const { id } = useParams(); // URL에서 id를 가져옴

  return <>GroupDetail {id}</>;
}
