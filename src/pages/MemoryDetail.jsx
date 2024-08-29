import MemoryComment from '../components/memorydetail/memorycomment/MemoryComment';
import MemoryContent from '../components/memorydetail/memorycontent/MemoryContent';
import MemoryInfo from '../components/memorydetail/memoryinfo/MemoryInfo';

export default function MemoryDetail() {
  return (
    <div>
      <MemoryInfo />
      <MemoryContent />
      <MemoryComment />
    </div>
  );
}
