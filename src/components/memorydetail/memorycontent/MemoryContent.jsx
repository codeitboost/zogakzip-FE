import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MemoryContext } from '../../../pages/memoryupload/MemoryContext';
import Button from '../../common/button/Button';
import image from '../../../assets/img/card/card3.png';
import CommentUploadModal from '../commentuploadmodal/CommentUploadModal';
import Modal from '../../common/modal/Modal';
import * as M from './MemoryContent.style';

export default function MemoryContent({ addComment }) {
  const { id } = useParams(); // URL에서 id 추출
  const { memories } = useContext(MemoryContext);

  const selectedMemory = memories.find((memory) => memory.id === id);

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const openUploadModal = () => setIsUploadModalOpen(true);
  const closeUploadModal = () => setIsUploadModalOpen(false);

  return (
    <M.Container>
      {selectedMemory.img && <M.Image src={selectedMemory.img} alt="memory" />}
      <M.Content>{selectedMemory.content}</M.Content>
      <Button text="댓글 등록하기" onClick={openUploadModal} />
      <Modal isOpen={isUploadModalOpen} onClose={closeUploadModal} title="댓글 등록">
        <CommentUploadModal addComment={addComment} closeModal={closeUploadModal} />
      </Modal>
    </M.Container>
  );
}
