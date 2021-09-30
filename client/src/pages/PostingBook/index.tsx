import Footer from 'components/Footer';
import Header from 'components/Header';
import SearchingBookContainer from 'containers/SearchingBookContainer';
import React, { useEffect } from 'react';

export default function PostingBook() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title='책 등록' />
      <section>
        <SearchingBookContainer />
      </section>
      <Footer />
    </>
  );
}
