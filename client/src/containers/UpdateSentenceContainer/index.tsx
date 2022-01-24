import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { UPDATE_SENTENCE } from 'graphql/sentence';
import { fetcher } from 'queryClient';

import { ButtonsContainer } from 'containers';
import { SentenceTextarea } from 'components';

interface StateTypes {
  id: string;
  text: string;
  trimedBookId: string;
  bookId: string;
  title: string;
}
export default function UpdateSentenceContainer() {
  const [newText, setNewText] = useState('');
  const { state } = useLocation<StateTypes>();
  const { id, bookId, text, title, trimedBookId } = state;
  const history = useHistory();

  const onSubmit = async () => {
    if (!newText.trim().length) return null;
    await fetcher(UPDATE_SENTENCE, { id, text: newText });
    history.push({
      pathname: `/book/${trimedBookId}/sentence/${id}`,
      state: { id, bookId, text: newText, title, trimedBookId },
    });
  };

  useEffect(() => {
    setNewText(text);
  }, []);

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    setNewText(e.target.value);
  };

  return (
    <>
      <ButtonsContainer pageName='needToContirm' onSubmit={onSubmit} readyToSubmit={!!newText.trim().length} />

      <SentenceTextarea text={newText} onChange={onChange} />
    </>
  );
}
