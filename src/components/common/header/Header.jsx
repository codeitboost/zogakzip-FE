import { useNavigate } from 'react-router-dom';
import * as H from './Header.style';
import logo from '../../../assets/img/logo.svg';

export default function Header() {
  const navigate = useNavigate();
  const handleMain = () => {
    navigate('/');
  };

  return (
    <H.Container>
      <H.Button onClick={handleMain}>
        <img src={logo} alt="logo" />
      </H.Button>
    </H.Container>
  );
}
