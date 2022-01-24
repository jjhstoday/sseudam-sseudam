import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SentenceListContainer } from 'containers';
import { AddButton, AppLayout } from 'components';
import { StateType } from 'pages/Sentence';

const Book = () => {
  const { state } = useLocation<StateType>();
  const { bookId, title, trimedBookId } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout title={title}>
      <section>
        <SentenceListContainer bookId={bookId} trimedBookId={trimedBookId} title={title} />
      </section>
      <AddButton moveToPage={`/book/${trimedBookId}/postingSentence`} id={bookId} />
    </AppLayout>
  );
};

export default Book;
