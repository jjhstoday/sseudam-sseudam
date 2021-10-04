import DeleteConfirmModal from 'components/DeleteConfirmModal';
import React, { FC } from 'react';
import { Button, DeleteBookIcon } from './styles';

interface Props {
  id: string;
  onClick: (id: string) => void;
  isModal?: boolean;
  onDeleteCancel?: () => void;
  onDeleteConfirm?: (id: string) => void;
}

const DeleteButton: FC<Props> = ({
  id,
  onClick,
  isModal = false,
  onDeleteCancel = () => {},
  onDeleteConfirm = () => {}
}) => {
  return (
    <>
      <Button onClick={() => onClick(id)}>
        <DeleteBookIcon />
      </Button>
      {isModal && (
        <DeleteConfirmModal
          onDeleteCancel={onDeleteCancel}
          onDeleteConfirm={onDeleteConfirm}
          id={id}
        />
      )}
    </>
  );
};

export default DeleteButton;
