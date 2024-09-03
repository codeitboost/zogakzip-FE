import { memo, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MemoryContext } from '../../../pages/memoryupload/MemoryContext';
import * as M from './MemoryInfo.style';
import Like from '../../common/like/Like';
import heart from '../../../assets/img/heart.svg';
import comment from '../../../assets/img/comment.svg';
import Modal from '../../common/modal/Modal';
import MemoryDeleteModal from '../memorydeletemodal/MemoryDeleteModal';
import MemoryEditModal from '../memoryeditmodal/MemoryEditModal';

export default function MemoryInfo() {
  const { id } = useParams(); // URL에서 id 추출
  const { memories, setMemories } = useContext(MemoryContext);

  const selectedMemory = memories.find((memory) => memory.id === id);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const updateMemory = (updatedMemory) => {
    setMemories((prevMemories) =>
      prevMemories.map((memory) => (memory.id === updatedMemory.id ? updatedMemory : memory)),
    );
  };

  return (
    <M.Container>
      <M.Top>
        <M.Info>
          <M.Writer>{selectedMemory.name}</M.Writer>
          <div>|</div>
          <M.Public>{selectedMemory.isPublic}</M.Public>
        </M.Info>
        <M.Menu>
          <M.Edit onClick={openEditModal}>추억 수정하기</M.Edit>
          <M.Delete onClick={openDeleteModal}>추억 삭제하기</M.Delete>
        </M.Menu>
      </M.Top>
      <M.Middle>
        <M.Title>{selectedMemory.title}</M.Title>
        <M.Tag>{selectedMemory.tags}</M.Tag>
      </M.Middle>
      <M.Bottom>
        <M.BottomLeft>
          <M.WriteInfo>
            <M.Location>{selectedMemory.location}</M.Location>
            <div>·</div>
            <M.Date>{selectedMemory.date}</M.Date>
          </M.WriteInfo>
          <M.Count>
            <M.Heart>
              <img src={heart} alt="heart" />
              <div>{selectedMemory.like}</div>
            </M.Heart>
            <M.Comment>
              <img src={comment} alt="comment" />
              <div>{selectedMemory.comment}</div>
            </M.Comment>
          </M.Count>
        </M.BottomLeft>
        <M.BottomRight>
          <Like />
        </M.BottomRight>
      </M.Bottom>
      <M.Line />
      <Modal isOpen={isEditModalOpen} onClose={closeEditModal} title="추억 수정">
        <MemoryEditModal selectedMemory={selectedMemory} closeModal={closeEditModal} onUpdateMemory={updateMemory} />
      </Modal>
      <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} title="추억 삭제">
        <MemoryDeleteModal />
      </Modal>
    </M.Container>
  );
}
