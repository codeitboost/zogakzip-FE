import * as I from './InputTagItem.style';
import deleteIcon from '../../../../assets/img/delete-gray.svg';

export default function InputTagItem({ tag, onDelete }) {
  return (
    <I.Container>
      <I.Tag>#{tag}</I.Tag>
      <I.Button type="button" onClick={onDelete}>
        <img src={deleteIcon} alt="delete" />
      </I.Button>
    </I.Container>
  );
}
