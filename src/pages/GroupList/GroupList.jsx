import { useContext } from 'react';
import Masonry from 'react-masonry-css';
import * as G from './GroupList.style';
import Menu from '../../components/grouplist/menu/Menu';
import GroupCard from '../../components/grouplist/groupcard/GroupCard';
import More from '../../components/common/more/More';
import { GroupContext } from '../../components/groupcreate/GroupContext';
import NoGroupList from './NoGroupList';

export default function GroupList() {
  const { groups } = useContext(GroupContext);

  return (
    <>
      <Menu />
      {groups.length === 0 ? (
        <NoGroupList />
      ) : (
        <>
          <G.Container>
            <Masonry
              breakpointCols={4} // 열 개수
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {groups.map((item) => (
                <GroupCard
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
          </G.Container>
          <More />
        </>
      )}
    </>
  );
}
