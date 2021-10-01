import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { CloseIcon, Button } from './styles';

interface StateTypes {
  pathname: string;
  trimedBookId: string;
}
export default function CloseButton() {
  const history = useHistory();
  const location = useLocation<StateTypes>();
  const { pathname, state } = location;

  const onClick = () => {
    if (
      pathname.includes('book') &&
      !pathname.includes('postingSentence') &&
      !pathname.includes('sentence') &&
      !pathname.includes('editSentence')
    ) {
      history.push('/');
    } else if (pathname.includes('sentence'))
      history.push({ pathname: `/book/${state.trimedBookId}`, state });
    else history.goBack();
  };

  return (
    <Button onClick={onClick}>
      <CloseIcon />
    </Button>
  );
}
