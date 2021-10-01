import SentenceDetailContainer from 'containers/SentenceDetailContainer';
import { P } from 'containers/SentenceListContainer/styles';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface StateType {
  id: string;
  bookId: string;
  text: string;
  title: string;
}
export default function Sentence() {
  const { state } = useLocation<StateType>();
  const { id, bookId, text, title } = state;

  return (
    <SentenceDetailContainer
      id={id}
      bookId={bookId}
      text={text}
      title={title}
    />
  );
}
