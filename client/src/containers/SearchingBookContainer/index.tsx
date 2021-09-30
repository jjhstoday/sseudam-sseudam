import { getSearchBook } from 'api/bookApi';
import Header from 'components/Header';
import SearchedBookList from 'components/SearchedBookList';
import SearchInput from 'components/SearchInput';
import React, { KeyboardEventHandler, useState } from 'react';
import { Container } from './styles';

interface SearchedBook {
  author: string;
  image: string;
  isbn: string;
  title: string;
  description?: string;
  discount?: string;
  link?: string;
  price?: string;
  pubdate?: string;
  publisher?: string;
}

const trimedTitle = (title: string) => {
  let newTitle = '';
  let copyTitle = title.split('');
  let isTitle = true;
  let isLparen = false;

  for (let i = 0; i < copyTitle.length; i++) {
    if (copyTitle[i] === '<') isTitle = false;
    if (copyTitle[i] === '(') isLparen = true;
    if (isTitle && !isLparen) newTitle += copyTitle[i];
    if (copyTitle[i] === '>') isTitle = true;
    if (copyTitle[i] === ')') isLparen = false;
  }
  return newTitle;
};

export default function SearchingBookContainer() {
  const [searchedBook, setSearchedBook] = useState([
    { id: '', title: '', author: '', image: '', isChecked: false }
  ]);
  const [isFail, setIsFail] = useState(false);

  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = async e => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;

    if (e.key !== 'Enter' || !value.trim()) return null;
    const res = await getSearchBook(value);
    const newRes = res.map((res: SearchedBook) => {
      return {
        id: res.isbn,
        title: trimedTitle(res.title),
        author: res.author,
        image: res.image,
        isChecked: false
      };
    });
    setSearchedBook(newRes);
    newRes.length ? setIsFail(false) : setIsFail(true);
  };

  const onClick = (id: string) => {
    const newData = searchedBook.map(old =>
      old.id === id
        ? { ...old, isChecked: !old.isChecked }
        : { ...old, isChecked: false }
    );
    setSearchedBook(newData);
  };

  return (
    <>
      <Header title='책 등록' />
      <Container>
        <SearchInput onKeyPress={onKeyPress} />
        <SearchedBookList
          searchedBook={searchedBook}
          onClick={onClick}
          isFail={isFail}
        />
      </Container>
    </>
  );
}
