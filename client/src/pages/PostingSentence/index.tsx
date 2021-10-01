import Footer from 'components/Footer';
import Header from 'components/Header';
import CreateSentenceContainer from 'containers/CreateSentenceContainer';
import { StateType } from 'pages/Sentence';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PostingSentence() {
  const { state } = useLocation<StateType>();
  const id = state.id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title='책 문장 기록' />
      <section>
        <CreateSentenceContainer id={id} />
      </section>
      <Footer />
    </>
  );
}
