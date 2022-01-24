import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  id: string;
  onDeleteCancel: () => void;
  onDeleteConfirm: (id: string) => void;
}

const DeleteConfirmModal: FC<Props> = ({ onDeleteCancel, onDeleteConfirm, id }) => {
  return (
    <Container>
      <div>
        <p>책을 삭제하시겠습니까?</p>
        <span>기록된 문장은 일괄 삭제됩니다.</span>
        <div>
          <button onClick={onDeleteCancel}>취소</button>
          <button onClick={() => onDeleteConfirm(id)}>확인</button>
        </div>
      </div>
    </Container>
  );
};

export default DeleteConfirmModal;
