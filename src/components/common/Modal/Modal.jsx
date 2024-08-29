import * as M from './Modal.style';

import cancelIcon from '../../../assets/img/cancel.svg';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <M.Background>
      <M.Container>
        <M.Title>{title}</M.Title>
        <M.Cancel type="button" onClick={onClose}>
          <img src={cancelIcon} alt="cancel" />
        </M.Cancel>
        {children}
      </M.Container>
    </M.Background>
  );
}
