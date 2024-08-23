import * as G from './GroupCard.style';
import card1 from '../../../assets/img/card/card1.png';
import logo from '../../../assets/img/logo/logo16.svg';

export default function GroupCard() {
  return (
    <G.Container>
      <G.Img src={card1} alt="card1" />
      <G.Info>
        <G.Day>D+100</G.Day>
        <div>|</div>
        <G.Public>공개</G.Public>
      </G.Info>
      <G.Title>
        <G.Name>에델바이스</G.Name>
        <G.Content>서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.</G.Content>
      </G.Title>
      <G.Count>
        <G.Badge>
          <G.BadgeTitle>획득 배지</G.BadgeTitle>
          <G.BadgeCount>2</G.BadgeCount>
        </G.Badge>
        <G.Memory>
          <G.MemoryTitle>추억</G.MemoryTitle>
          <G.MemoryCount>8</G.MemoryCount>
        </G.Memory>
        <G.Like>
          <G.LikeTitle>그룹 공감</G.LikeTitle>
          <G.LikeCount>
            <img src={logo} alt="logo" />
            <div>1.5K</div>
          </G.LikeCount>
        </G.Like>
      </G.Count>
    </G.Container>
  );
}
