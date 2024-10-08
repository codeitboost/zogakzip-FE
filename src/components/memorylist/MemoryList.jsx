import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { MemoryContext } from '../../pages/memoryupload/MemoryContext';
import MemoryCard from './MemoryCard';
import * as M from './MemoryList.style';
import Menu from '../grouplist/menu/Menu';
import More from '../common/more/More';
import NoMemoryList from './NoMemoryList';

export default function MemoryList() {
  const { memories } = useContext(MemoryContext);
  const { id } = useParams();

  const groupMemories = memories.filter((memory) => memory.groupId === id);

  return (
    <>
      <M.Title>추억 목록</M.Title>
      <Menu type="추억" />
      {groupMemories.length === 0 ? (
        <NoMemoryList />
      ) : (
        <>
          <M.Container>
            <Masonry
              breakpointCols={4} // 열 개수
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {groupMemories.map((item) => (
                <MemoryCard
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  isPublic={item.isPublic}
                  title={item.title}
                  tags={item.tags}
                  location={item.location}
                  date={item.date}
                  like={item.like}
                  comment={item.comment}
                />
              ))}
            </Masonry>
          </M.Container>
          <More />
        </>
      )}
    </>
  );
}
