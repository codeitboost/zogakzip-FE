import * as I from './InputDate.style';

import dateIcon from '../../../assets/img/date.svg';

export default function InputDate({ value }) {
  return (
    <I.Container>
      <I.Title>추억의 순간</I.Title>
      <I.Input placeholder="YYYY-MM-DD" value={value} readOnly />
      <I.Button type="button">
        <I.Icon src={dateIcon} alt="date" />
      </I.Button>
    </I.Container>
  );
}
