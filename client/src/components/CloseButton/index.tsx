import React from 'react';
import { useHistory } from 'react-router-dom';
import { CloseIcon, Button } from './styles';

export default function CloseButton() {
  const history = useHistory();

  const onClick = () => {
    history.goBack();
  };

  return (
    <Button onClick={onClick}>
      <CloseIcon />
    </Button>
  );
}
