import React, { FC, MouseEventHandler } from 'react';

import { Button, ConfirmIcon } from './styles';

interface Props {
  onSubmit: MouseEventHandler<HTMLButtonElement>;
  readyToSubmit: boolean;
}
const ConfirmButton: FC<Props> = ({ onSubmit, readyToSubmit }) => {
  return (
    <Button onClick={onSubmit} $readyToSubmit={readyToSubmit}>
      <ConfirmIcon />
    </Button>
  );
};

export default ConfirmButton;
