import Footer from 'components/Footer';
import SearchingBookContainer from 'containers/SearchingBookContainer';
import React, { useEffect } from 'react';

export default function PostingBook() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <SearchingBookContainer />
      </section>
      <Footer />
    </>
  );
}
