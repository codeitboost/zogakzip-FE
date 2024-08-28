import * as M from './MemoryInfo.style';
import Like from '../common/like/Like';

import heart from '../../assets/img/heart.svg';
import comment from '../../assets/img/comment.svg';

export default function MemoryInfo() {
  return (
    <M.Container>
      <M.Top>
        <M.Info>
          <M.Writer>달봉이아들</M.Writer>
          <div>|</div>
          <M.Public>공개</M.Public>
        </M.Info>
        <M.Menu>
          <M.Edit>추억 수정하기</M.Edit>
          <M.Delete>추억 삭제하기</M.Delete>
        </M.Menu>
      </M.Top>
      <M.Middle>
        <M.Title>인천 앞바다에서 무려 60cm 월척을 낚다!</M.Title>
        <M.Tag>#인천 #낚시</M.Tag>
      </M.Middle>
      <M.Bottom>
        <M.BottomLeft>
          <M.WriteInfo>
            <M.Location>인천 앞바다</M.Location>
            <div>·</div>
            <M.Date>24.01.19 18:00</M.Date>
          </M.WriteInfo>
          <M.Count>
            <M.Heart>
              <img src={heart} alt="heart" />
              <div>120</div>
            </M.Heart>
            <M.Comment>
              <img src={comment} alt="comment" />
              <div>8</div>
            </M.Comment>
          </M.Count>
        </M.BottomLeft>
        <M.BottomRight>
          <Like />
        </M.BottomRight>
      </M.Bottom>
      <M.Line />
    </M.Container>
  );
}
