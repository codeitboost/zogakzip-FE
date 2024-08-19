import * as H from './Header.style';
import logo from '../../assets/img/logo.png';

export default function Header() {
  return (
    <H.Container>
      <img src={logo} alt="logo" />
    </H.Container>
  );
}
