import { useState } from 'react';
import * as D from './Dropdown.style';
import arrow from '../../../assets/img/arrow-down.svg';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('공감순');

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option, event) => {
    event.stopPropagation(); // 이벤트 버블링 방지 (선택 후 토글 안닫히는 문제 해결)
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <D.Container onClick={toggleDropdown}>
      <D.Text>{selectedOption}</D.Text>
      <D.Img src={arrow} alt="arrow-down" />
      {isOpen && (
        <D.Options onClick={(e) => e.stopPropagation()}>
          {' '}
          {/* 옵션 목록 클릭 시 버블링 방지 */}
          <D.Option onClick={(e) => handleOptionClick('공감순', e)}>공감순</D.Option>
          <D.Option onClick={(e) => handleOptionClick('최근순', e)}>최근순</D.Option>
        </D.Options>
      )}
    </D.Container>
  );
}
