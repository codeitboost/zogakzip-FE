import * as D from './Dropdown.style';
import arrow from '../../../assets/img/arrow-down.svg';

export default function Dropdown() {
  return (
    <D.Container>
      <D.Text>공감순</D.Text>
      <D.Img src={arrow} alt="arrow-down" />
    </D.Container>
  );
}
