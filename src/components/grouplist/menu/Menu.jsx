import Button from '../../common/button/Button';
import Dropdown from '../../common/dropdown/Dropdown';
import Search from '../../common/search/Search';
import Tab from '../../common/tab/Tab';
import * as M from './Menu.style';

export default function Menu() {
  return (
    <M.Container>
      <M.Button>
        <Button text="그룹 만들기" width="200px" height="45px" fontsize="14px" />
      </M.Button>
      <M.Menu>
        <M.Tab>
          <Tab text="공개" />
          <Tab text="비공개" />
        </M.Tab>
        <Search placeholder="그룹명을 검색해 주세요" />
        <Dropdown />
      </M.Menu>
    </M.Container>
  );
}
