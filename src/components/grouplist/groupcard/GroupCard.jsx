import { useNavigate } from 'react-router-dom';
import * as G from './GroupCard.style';
import card1 from '../../../assets/img/card/card1.png';
import logo from '../../../assets/img/logo/logo16.svg';

export default function GroupCard({ id, img, day, isPublic, title, content, badge, memory, like }) {
  const navigate = useNavigate();
  const handleGroupDetail = () => {
    navigate(`/group-detail/${id}`);
  };

  return (
    <G.Container onClick={handleGroupDetail}>
      ㄱ{img && <G.Img src={img} alt="card1" />}
      <G.Info>
        <G.Day>D+{day}</G.Day>
        <div>|</div>
        <G.Public>{isPublic ? '공개' : '비공개'}</G.Public>
      </G.Info>
      <G.Title>
        <G.Name>{title}</G.Name>
        <G.Content>{content}</G.Content>
      </G.Title>
      <G.Count>
        <G.Badge>
          <G.BadgeTitle>획득 배지</G.BadgeTitle>
          <G.BadgeCount>{badge}</G.BadgeCount>
        </G.Badge>
        <G.Memory>
          <G.MemoryTitle>추억</G.MemoryTitle>
          <G.MemoryCount>{memory}</G.MemoryCount>
        </G.Memory>
        <G.Like>
          <G.LikeTitle>그룹 공감</G.LikeTitle>
          <G.LikeCount>
            <img src={logo} alt="logo" />
            <div>{like}</div>
          </G.LikeCount>
        </G.Like>
      </G.Count>
    </G.Container>
  );
}
