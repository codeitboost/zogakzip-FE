import * as M from './MemoryContent.style';
import Button from '../common/button/Button';

import image from '../../assets/img/card/card3.png';

export default function MemoryContent() {
  return (
    <M.Container>
      <img src={image} alt="memory" />
      <M.Content>
        {`인천 앞바다에서 월척을 낚았습니다!
가족들과 기억에 오래도록 남을 멋진 하루였어요 가족들과 기억에 오래도록 남을 멋진 하루였어요 가족들과 기억에 오래도록 남을 멋진 하루였어요

인천 앞바다에서 월척을 낚았습니다! 
가족들과 기억에 오래도록 남을 멋진 하루였어요 

인천 앞바다에서 월척을 낚았습니다!`}
      </M.Content>
      <Button text="댓글 등록하기" />
    </M.Container>
  );
}
