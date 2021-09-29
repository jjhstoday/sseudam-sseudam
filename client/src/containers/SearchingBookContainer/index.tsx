import { getSearchBook } from 'api/bookApi';
import SearchInput from 'components/SearchInput';
import React, { KeyboardEventHandler } from 'react';
import { Container } from './styles';

export default function SearchingBookContainer() {
  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = e => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;

    if (e.key !== 'Enter' || !value.trim()) return null;
    getSearchBook(value);
  };

  return (
    <Container>
      <SearchInput onKeyPress={onKeyPress} />
    </Container>
  );
}
