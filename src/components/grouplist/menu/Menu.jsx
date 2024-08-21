import Search from '../../common/search/Search';
import Tab from '../../common/tab/Tab';
import * as M from './Menu.style';

export default function Menu() {
  return (
    <M.Container>
      <M.Tab>
        <Tab text="공개" />
        <Tab text="비공개" />
      </M.Tab>
      <Search placeholder="그룹명을 검색해 주세요" />
    </M.Container>
  );
}
