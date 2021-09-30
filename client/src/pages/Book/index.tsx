import Footer from 'components/Footer';
import Header from 'components/Header';
import SentencesContainer from 'containers/SentencesContainer';
import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface StateType {
  id: string;
  title: string;
  sentences?: Array<{ id: string; bookId: string; text: string }>;
}

const Book = () => {
  const { state } = useLocation<StateType>();
  const { id, title, sentences } = state;
  console.log(id, title, sentences);

  return (
    <>
      <Header title={title} />
      <section>
        <SentencesContainer id={id} />
      </section>
      <Footer />
    </>
  );
};

export default Book;
