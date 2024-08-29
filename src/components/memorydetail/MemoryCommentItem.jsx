import * as M from './MemoryCommentItem.style';

import editIcon from '../../assets/img/edit.svg';
import deleteIcon from '../../assets/img/delete.svg';

export default function MemoryCommentItem() {
  return (
    <M.Container>
      <M.Info>
        <M.Name>다람이네가족</M.Name>
        <M.Date>24.01.18 21:50</M.Date>
      </M.Info>
      <M.Content>
        <M.Comment>우와 60cm이라니..!! 저도 가족들과 가봐야겠어요~</M.Comment>
        <M.Edit>
          <img src={editIcon} alt="edit" />
          <img src={deleteIcon} alt="delete" />
        </M.Edit>
      </M.Content>
      <M.Line />
    </M.Container>
  );
}
