import React from 'react';
import { useLocation } from 'react-router-dom';

import { SentenceDetailContainer } from 'containers';

export interface StateType {
  id: string;
  bookId: string;
  text: string;
  title: string;
  trimedBookId: string;
}
export default function Sentence() {
  const { state } = useLocation<StateType>();
  const { id, bookId, text, title, trimedBookId } = state;

  return <SentenceDetailContainer id={id} bookId={bookId} text={text} title={title} trimedBookId={trimedBookId} />;
}
