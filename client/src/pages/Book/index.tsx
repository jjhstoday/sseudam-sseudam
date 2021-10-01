import AddButton from 'components/AddButton';
import Footer from 'components/Footer';
import Header from 'components/Header';
import SentenceListContainer from 'containers/SentenceListContainer';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

interface StateType {
  id: string;
  title: string;
  sentences: Array<{ id?: string; bookId?: string; text?: string }>;
}

interface ParamsType {
  bookId: string;
  sentenceId?: string;
}

const Book = () => {
  const { state } = useLocation<StateType>();
  const { bookId } = useParams<ParamsType>();
  const { id, title } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title={title} />
      <section>
        <SentenceListContainer id={id} trimedBookId={bookId} title={title} />
      </section>
      <AddButton moveToPage={`/book/${bookId}/postingSentence`} id={id} />
      <Footer />
    </>
  );
};

export default Book;
