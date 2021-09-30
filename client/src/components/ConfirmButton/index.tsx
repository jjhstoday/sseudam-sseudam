import React, { FC, MouseEventHandler } from 'react';
import { Button, ConfirmIcon } from './styles';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  readyToSubmit: boolean;
}
const ConfirmButton: FC<Props> = ({ onClick, readyToSubmit }) => {
  return (
    <Button onClick={onClick} $readyToSubmit={readyToSubmit}>
      <ConfirmIcon />
    </Button>
  );
};

export default ConfirmButton;
