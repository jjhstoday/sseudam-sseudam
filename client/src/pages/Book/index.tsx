import AddButton from 'components/AddButton';
import Footer from 'components/Footer';
import Header from 'components/Header';
import SentencesContainer from 'containers/SentencesContainer';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

interface StateType {
  id: string;
  title: string;
  sentences?: Array<{ id: string; bookId: string; text: string }>;
}

interface ParamsType {
  bookId: string;
}

const Book = () => {
  const { state } = useLocation<StateType>();
  const { bookId } = useParams<ParamsType>();

  const { id, title, sentences } = state;

  return (
    <>
      <Header title={title} />
      <section>
        <SentencesContainer id={id} />
      </section>
      <AddButton moveToPage={`/book/${bookId}/postingSentence`} id={id} />
      <Footer />
    </>
  );
};

export default Book;
