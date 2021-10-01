import AddButton from 'components/AddButton';
import Footer from 'components/Footer';
import Header from 'components/Header';
import SentenceListContainer from 'containers/SentenceListContainer';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StateType } from 'pages/Sentence';

const Book = () => {
  const { state } = useLocation<StateType>();
  const { bookId, title, trimedBookId } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title={title} />
      <section>
        <SentenceListContainer
          bookId={bookId}
          trimedBookId={trimedBookId}
          title={title}
        />
      </section>
      <AddButton
        moveToPage={`/book/${trimedBookId}/postingSentence`}
        id={bookId}
      />
      <Footer />
    </>
  );
};

export default Book;
