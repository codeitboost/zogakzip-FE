import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/button/Button';
import Dropdown from '../../common/dropdown/Dropdown';
import Search from '../../common/search/Search';
import Tab from '../../common/tab/Tab';
import * as M from './Menu.style';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('public'); // 'public' 또는 'private'

  const navigate = useNavigate();
  const handleGroupCreate = () => {
    navigate('/group-create');
  };

  const handleTabClick = (tabType) => {
    setActiveTab(tabType);
  };

  return (
    <M.Container>
      <M.Button onClick={handleGroupCreate}>
        <Button text="그룹 만들기" width="200px" height="45px" fontsize="14px" />
      </M.Button>
      <M.Menu>
        <M.Tab>
          <Tab text="공개" isActive={activeTab === 'public'} onClick={() => handleTabClick('public')} />
          <Tab text="비공개" isActive={activeTab === 'private'} onClick={() => handleTabClick('private')} />
        </M.Tab>
        <Search placeholder="그룹명을 검색해 주세요" />
        <Dropdown />
      </M.Menu>
    </M.Container>
  );
}
