import { useContext } from 'react';
import Masonry from 'react-masonry-css';
import { MemoryContext } from '../../pages/memoryupload/MemoryContext';
import MemoryCard from './MemoryCard';
import * as M from './MemoryList.style';
import Menu from '../grouplist/menu/Menu';
import More from '../common/more/More';
import NoMemoryList from './NoMemoryList';

export default function MemoryList() {
  const { memories } = useContext(MemoryContext);

  return (
    <>
      <M.Title>추억 목록</M.Title>
      <Menu type="추억" />
      {memories.length === 0 ? (
        <NoMemoryList />
      ) : (
        <>
          <M.Container>
            <Masonry
              breakpointCols={4} // 열 개수
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {memories.map((item) => (
                <MemoryCard
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  day={item.day}
                  isPublic={item.isPublic}
                  title={item.title}
                  content={item.content}
                  badge={item.badge}
                  memory={item.memory}
                  like={item.like}
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
