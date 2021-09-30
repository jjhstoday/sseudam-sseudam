import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { CloseIcon, Button } from './styles';

export default function CloseButton() {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const onClick = () => {
    if (pathname.includes('book') && !pathname.includes('postingSentence')) {
      history.push('/');
    } else history.goBack();
  };

  return (
    <Button onClick={onClick}>
      <CloseIcon />
    </Button>
  );
}
