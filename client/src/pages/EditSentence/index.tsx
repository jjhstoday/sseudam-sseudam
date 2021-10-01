import Footer from 'components/Footer';
import Header from 'components/Header';
import UpdateSentenceContainer from 'containers/UpdateSentenceContainer';
import React, { useEffect } from 'react';

export default function EditSentence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title='책 문장 수정' />
      <section>
        <UpdateSentenceContainer />
      </section>
      <Footer />
    </>
  );
}
