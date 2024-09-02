import { useParams } from 'react-router-dom';
import MemoryCard from '../components/memorylist/MemoryCard';
import MemoryList from '../components/memorylist/MemoryList';

export default function GroupDetail() {
  const { id } = useParams(); // URL에서 id를 가져옴

  return <MemoryList />;
}
