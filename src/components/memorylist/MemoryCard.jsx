import * as M from './MemoryCard.style';
import image from '../../assets/img/card/card3.png';
import likeIcon from '../../assets/img/logo/logo_like.svg';
import commentIcon from '../../assets/img/comment.svg';

export default function MemoryCard() {
  return (
    <M.Container>
      <M.Image src={image} alt="thumb" />
      <M.Top>
        <M.Name>달봉이 아들</M.Name>
        <div>|</div>
        <M.Public>공개</M.Public>
      </M.Top>
      <M.Middle>
        <M.Title>인천 앞바다에서 무려 60cm 월척을 낚다!</M.Title>
        <M.Tags>#인천 #낚시</M.Tags>
      </M.Middle>
      <M.Bottom>
        <M.Info>
          <M.Location>인천 앞바다</M.Location>
          <M.Date>· 24.01.19 18:00</M.Date>
        </M.Info>
        <M.Count>
          <M.Like>
            <img src={likeIcon} alt="like" />
            120
          </M.Like>
          <M.Comment>
            <img src={commentIcon} alt="comment" />8
          </M.Comment>
        </M.Count>
      </M.Bottom>
    </M.Container>
  );
}
