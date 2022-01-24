import React, { useEffect, useRef, useState } from 'react';

import { fetcher } from 'queryClient';
import { GET_BOOKS } from 'graphql/book';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

import { Book, MyCount, Message, Loading } from 'components';
import { Ul } from './styles';

interface Books {
  id: string;
  title: string;
  author: string;
  image: string;
  sentences?: Array<{ id: string; bookId: string; text: string }>;
}
export default function BookListContainer() {
  const [books, setBooks] = useState<Books[]>([]);
  const fetchMoreEl = useRef<HTMLDivElement | null>(null);
  const intersecting = useInfiniteScroll(fetchMoreEl);
  const [hasNext, setHasNext] = useState(true);
  const [booksLength, setBooksLength] = useState(0);
  const [loading, setLoading] = useState(false);

  const getServerSideData = async () => {
    const { books: sBooks } = await fetcher(GET_BOOKS, {
      cursor: books[books.length - 1]?.id,
    });
    if (sBooks.length === 0) {
      setHasNext(false);
      return;
    }
    setBooks(old => [...old, ...sBooks]);
  };

  useEffect(() => {
    if (intersecting && hasNext) getServerSideData();
  }, [intersecting, hasNext]);

  const getBooksLength = async () => {
    const { books: sBooks } = await fetcher(GET_BOOKS, { cursor: 'all' });
    await setBooksLength(sBooks.length);
    await setTimeout(() => setLoading(true), 50);
  };

  useEffect(() => {
    getBooksLength();
  }, []);

  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <>
          <MyCount count={booksLength} title='나의 책장' />
          {books.length > 0 ? (
            <Ul>
              {books.map(book => (
                <Book key={book.id} book={book} />
              ))}
            </Ul>
          ) : (
            <Message text='나만의 첫 책을 등록해보세요.' />
          )}
        </>
      )}

      <div ref={fetchMoreEl}></div>
    </>
  );
}
