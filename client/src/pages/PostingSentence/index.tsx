import Footer from 'components/Footer';
import Header from 'components/Header';
import React, { useEffect } from 'react';

export default function PostingSentence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title='책 구절 등록' />
      <section></section>
      <Footer />
    </>
  );
}
