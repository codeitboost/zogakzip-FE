import * as G from './GroupList.style';

import Button from '../components/common/button/Button';
import Menu from '../components/grouplist/menu/Menu';
import Tab from '../components/common/tab/Tab';
import GroupCard from '../components/grouplist/groupcard/GroupCard';

import card5 from '../assets/img/card/card5.png';

const data = [
  {
    id: 1,
    img: `${card5}`,
    day: 256,
    isPublic: true,
    title: '에델바이스',
    content: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
    badge: 2,
    memory: 8,
    like: '1.5K',
  },
  {
    id: 2,
    day: 256,
    isPublic: true,
    title: '에델바이스',
    content: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
    badge: 2,
    memory: 8,
    like: '1.5K',
  },
  {
    id: 3,
    img: `${card5}`,
    day: 256,
    isPublic: true,
    title: '에델바이스',
    content: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
    badge: 2,
    memory: 8,
    like: '1.5K',
  },
  {
    id: 4,
    day: 256,
    isPublic: true,
    title: '에델바이스',
    content: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
    badge: 2,
    memory: 8,
    like: '1.5K',
  },
  {
    id: 5,
    img: `${card5}`,
    day: 256,
    isPublic: true,
    title: '에델바이스',
    content: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
    badge: 2,
    memory: 8,
    like: '1.5K',
  },
  {
    id: 6,
    img: `${card5}`,
    day: 256,
    isPublic: true,
    title: '에델바이스',
    content: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
    badge: 2,
    memory: 8,
    like: '1.5K',
  },
  {
    id: 7,
    img: `${card5}`,
    day: 256,
    isPublic: true,
    title: '에델바이스',
    content: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
    badge: 2,
    memory: 8,
    like: '1.5K',
  },
  {
    id: 8,
    img: `${card5}`,
    day: 256,
    isPublic: true,
    title: '에델바이스',
    content: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
    badge: 2,
    memory: 8,
    like: '1.5K',
  },
  {
    id: 9,
    day: 256,
    isPublic: true,
    title: '에델바이스',
    content: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
    badge: 2,
    memory: 8,
    like: '1.5K',
  },
  {
    id: 10,
    img: `${card5}`,
    day: 256,
    isPublic: true,
    title: '에델바이스',
    content: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
    badge: 2,
    memory: 8,
    like: '1.5K',
  },
  {
    id: 11,
    day: 256,
    isPublic: true,
    title: '에델바이스',
    content: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
    badge: 2,
    memory: 8,
    like: '1.5K',
  },
  {
    id: 12,
    day: 256,
    isPublic: true,
    title: '에델바이스',
    content: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
    badge: 2,
    memory: 8,
    like: '1.5K',
  },
];

export default function GroupList() {
  return (
    <>
      {/* <Button text="그룹 만들기" width="200px" height="45px" fontsize="14px" /> */}
      <Menu />
      <G.Container>
        {data.map((item) => (
          <GroupCard
            key={item.id}
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
      </G.Container>
    </>
  );
}
