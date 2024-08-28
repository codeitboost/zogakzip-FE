import * as L from './Like.style';

import logo from '../../../assets/img/logo/logo_like.svg';

export default function Like() {
  return (
    <L.Container>
      <img src={logo} alt="logo" />
      <div>공감 보내기</div>
    </L.Container>
  );
}
