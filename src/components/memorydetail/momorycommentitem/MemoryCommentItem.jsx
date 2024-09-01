import { useState } from 'react';
import * as M from './MemoryCommentItem.style';
import editIcon from '../../../assets/img/edit.svg';
import deleteIcon from '../../../assets/img/delete.svg';
import Modal from '../../common/modal/Modal';
import CommentEditModal from '../commenteditmodal/CommentEditModal';
import CommentDeleteModal from '../commentdeletemodal/CommentDeleteModal';

export default function MemoryCommentItem({ id, name, date, children, password, editComment, deleteComment }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handleEdit = (updatedName, updatedComment) => {
    console.log('Editing:', id, updatedName, updatedComment);
    editComment(id, updatedName, updatedComment);
  };

  const handleDelete = () => {
    deleteComment(id);
  };

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
        <CommentEditModal
          id={id}
          commentName={name}
          commentText={children}
          commentPassword={password}
          onEdit={handleEdit}
          closeModal={closeEditModal}
        />
      </Modal>
      <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} title="댓글 삭제">
        <CommentDeleteModal commentPassword={password} deleteComment={handleDelete} closeModal={closeDeleteModal} />
      </Modal>
    </M.Container>
  );
}
