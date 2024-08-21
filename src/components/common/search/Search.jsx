import * as S from './Search.style';
import icon from '../../../assets/img/search.svg';

export default function Search({ placeholder }) {
  return (
    <S.Container>
      <S.Icon src={icon} alt="logo" />
      <S.TextField placeholder={placeholder} />
    </S.Container>
  );
}
