import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import MemoryComment from '../components/memorydetail/memorycomment/MemoryComment';
import MemoryContent from '../components/memorydetail/memorycontent/MemoryContent';
import MemoryInfo from '../components/memorydetail/memoryinfo/MemoryInfo';
import { MemoryContext } from './memoryupload/MemoryContext';

const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export default function MemoryDetail() {
  const [comments, setComments] = useState([]);

  const addComment = (name, comment, password) => {
    setComments((prevComments) => [
      ...prevComments,
      { id: generateId(), name, comment, password, date: new Date().toLocaleString() },
    ]);
  };

  const editComment = (id, updatedName, updatedComment) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? { ...comment, name: updatedName, comment: updatedComment, date: new Date().toLocaleString() }
          : comment,
      ),
    );
  };

  const deleteComment = (id) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <MemoryInfo />
      <MemoryContent addComment={addComment} />
      <MemoryComment comments={comments} editComment={editComment} deleteComment={deleteComment} />
    </div>
  );
}
