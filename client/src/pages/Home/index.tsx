import AddButton from 'components/AddButton';
import Footer from 'components/Footer';
import Header from 'components/Header';
import BookListContainer from 'containers/BookListContainer';
import React from 'react';

export default function Home() {
  console.log('NODE_ENV: ', process.env.NODE_ENV, 'process.env: ', process.env);
  return (
    <>
      <Header title='쓰담쓰담' />
      <section>
        <BookListContainer />
      </section>
      <AddButton moveToPage='/postingBook' />
      <Footer />
    </>
  );
}
