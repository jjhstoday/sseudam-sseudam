import { getSearchBook } from 'api/bookApi';
import SearchedBookList from 'components/SearchedBookList';
import SearchInput from 'components/SearchInput';
import React, { KeyboardEventHandler, useState } from 'react';
import { Container } from './styles';

export default function SearchingBookContainer() {
  const [searchedBook, setSearchedBook] = useState([]);

  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = async e => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;

    if (e.key !== 'Enter' || !value.trim()) return null;
    const res = await getSearchBook(value);
    setSearchedBook(res);
  };

  return (
    <Container>
      <SearchInput onKeyPress={onKeyPress} />
      <SearchedBookList searchedBook={searchedBook} />
    </Container>
  );
}
