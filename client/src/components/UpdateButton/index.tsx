import React, { FC } from 'react';

import { Button, UpdateIcon } from './styles';

interface Props {
  id: string;
  text: string;
  trimedBookId: string;
  onUpdate: (id: string, text: string, trimedBookId: string) => void;
}
const UpdateButton: FC<Props> = ({ id, text, trimedBookId, onUpdate }) => {
  return (
    <Button onClick={() => onUpdate(id, text, trimedBookId)}>
      <UpdateIcon />
    </Button>
  );
};

export default UpdateButton;
