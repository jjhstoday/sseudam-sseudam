import AddButton from 'components/AddButton';
import Footer from 'components/Footer';
import Header from 'components/Header';
import BookListContainer from 'containers/BookListContainer';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header title='쓰담쓰담' />
      <BookListContainer />
      <AddButton moveToPage='/postingBook' />
      <Footer />
    </>
  );
}
