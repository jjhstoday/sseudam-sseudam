import Footer from 'components/Footer';
import Header from 'components/Header';
import BookList from 'containers/BookList';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <BookList />
      <Footer />
    </>
  );
}
