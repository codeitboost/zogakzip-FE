import { useNavigate } from 'react-router-dom';
import * as M from './MemoryCard.style';
import image from '../../assets/img/card/card3.png';
import likeIcon from '../../assets/img/logo/logo_like.svg';
import commentIcon from '../../assets/img/comment.svg';

export default function MemoryCard({ id, img, name, isPublic, title, tags, location, date, like, comment }) {
  const navigate = useNavigate();
  const handleMemoryDetail = () => {
    navigate(`/memory-detail/${id}`);
  };

  return (
    <M.Container onClick={handleMemoryDetail}>
      {img && <M.Image src={img} alt="thumb" />}
      <M.Top>
        <M.Name>{name}</M.Name>
        <div>|</div>
        <M.Public>{isPublic ? '공개' : '비공개'}</M.Public>
      </M.Top>
      <M.Middle>
        <M.Title>{title}</M.Title>
        <M.Tags>{tags}</M.Tags>
      </M.Middle>
      <M.Bottom>
        <M.Info>
          <M.Location>{location}</M.Location>
          <M.Date>· {date}</M.Date>
        </M.Info>
        <M.Count>
          <M.Like>
            <img src={likeIcon} alt="like" />
            {like}
          </M.Like>
          <M.Comment>
            <img src={commentIcon} alt="comment" />
            {comment}
          </M.Comment>
        </M.Count>
      </M.Bottom>
    </M.Container>
  );
}
