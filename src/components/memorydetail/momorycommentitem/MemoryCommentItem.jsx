import { useState } from 'react';
import * as M from './MemoryCommentItem.style';
import editIcon from '../../../assets/img/edit.svg';
import deleteIcon from '../../../assets/img/delete.svg';
import Modal from '../../common/modal/Modal';
import CommentUploadModal from '../commentuploadmodal/CommentUploadModal';
import MemoryDeleteModal from '../memorydeletemodal/MemoryDeleteModal';

export default function MemoryCommentItem({ name, date, children }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <M.Container>
      <M.Info>
        <M.Name>{name}</M.Name>
        <M.Date>{date}</M.Date>
      </M.Info>
      <M.Content>
        <M.Comment>{children}</M.Comment>
        <M.Edit>
          <M.Button type="button" onClick={openEditModal}>
            <img src={editIcon} alt="edit" />
          </M.Button>
          <M.Button type="button" onClick={openDeleteModal}>
            <img src={deleteIcon} alt="delete" />
          </M.Button>
        </M.Edit>
      </M.Content>
      <M.Line />
      <Modal isOpen={isEditModalOpen} onClose={closeEditModal} title="댓글 수정">
        <CommentUploadModal />
      </Modal>
      <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} title="댓글 삭제">
        <MemoryDeleteModal />
      </Modal>
    </M.Container>
  );
}
