import CloseButton from 'components/CloseButton';
import ConfirmButton from 'components/ConfirmButton';
import SentenceTextarea from 'components/SentenceTextarea';
import { UPDATE_SENTENCE } from 'graphql/sentence';
import { fetcher } from 'queryClient';
import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

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
    console.log('onsubmit..');
    history.push({
      pathname: `/book/${trimedBookId}/sentence/${id}`,
      state: { id, bookId, text: newText, title, trimedBookId }
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
      <CloseButton />
      <ConfirmButton
        onClick={onSubmit}
        readyToSubmit={!!newText.trim().length}
      />
      <SentenceTextarea text={newText} onChange={onChange} />
    </>
  );
}
