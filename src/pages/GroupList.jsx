import Button from '../components/common/button/Button';
import Menu from '../components/grouplist/menu/Menu';
import Tab from '../components/common/tab/Tab';
import GroupCard from '../components/grouplist/groupcard/GroupCard';

export default function GroupList() {
  return (
    <>
      {/* <Button text="그룹 만들기" width="200px" height="45px" fontsize="14px" /> */}
      <Menu />
      <div>
        <GroupCard />
      </div>
    </>
  );
}
