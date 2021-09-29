import Footer from 'components/Footer';
import Header from 'components/Header';
import SearchingBookContainer from 'containers/SearchingBookContainer';
import React from 'react';

export default function PostingBook() {
  return (
    <>
      <Header title='책 등록' />
      <SearchingBookContainer />
      <Footer />
    </>
  );
}
