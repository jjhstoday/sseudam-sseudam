import React, { FC } from 'react';
import { Button, DeleteBookIcon } from './styles';

interface Props {
  id: string;
  onClick: (id: string) => void;
}

const DeleteButton: FC<Props> = ({ id, onClick }) => {
  return (
    <Button onClick={() => onClick(id)}>
      <DeleteBookIcon />
    </Button>
  );
};

export default DeleteButton;
