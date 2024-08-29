import MemoryComment from '../components/memorydetail/MemoryComment';
import MemoryContent from '../components/memorydetail/MemoryContent';
import MemoryInfo from '../components/memorydetail/MemoryInfo';

export default function MemoryDetail() {
  return (
    <div>
      <MemoryInfo />
      <MemoryContent />
      <MemoryComment />
    </div>
  );
}
