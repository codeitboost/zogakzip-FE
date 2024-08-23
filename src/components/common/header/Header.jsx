import * as H from './Header.style';
import logo from '../../../assets/img/logo.svg';

export default function Header() {
  return (
    <H.Container>
      <img src={logo} alt="logo" />
    </H.Container>
  );
}
