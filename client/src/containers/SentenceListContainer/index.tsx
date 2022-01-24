import React, { FC, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { fetcher } from 'queryClient';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import { DELETE_BOOK } from 'graphql/book';
import { GET_SENTENCES } from 'graphql/sentence';

import { ButtonsContainer } from 'containers';
import { Sentence, MyCount, Message, Loading } from 'components';
import { Ul } from './styles';

interface Props {
  bookId: string;
  trimedBookId: string;
  title: string;
}

interface Sentences {
  id: string;
  text: string;
  bookId: string;
}

const SentenceListContainer: FC<Props> = ({ bookId, trimedBookId, title }) => {
  const history = useHistory();
  const [stcs, setStcs] = useState<Sentences[]>([]);
  const fetchMoreEl = useRef<HTMLDivElement | null>(null);
  const intersecting = useInfiniteScroll(fetchMoreEl);
  const [hasNext, setHasNext] = useState(true);
  const [booksLength, setBooksLength] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const getServerSideData = async () => {
    const { sentences: sStcs } = await fetcher(GET_SENTENCES, {
      bookId,
      cursor: stcs[stcs.length - 1]?.id,
    });
    if (sStcs.length === 0) {
      setHasNext(false);
      return;
    }
    setStcs(old => [...old, ...sStcs]);
  };

  useEffect(() => {
    if (intersecting && hasNext) getServerSideData();
  }, [intersecting, hasNext]);

  const getStcsLength = async () => {
    const { sentences: sStcs } = await fetcher(GET_SENTENCES, {
      bookId,
      cursor: 'all',
    });
    await setBooksLength(sStcs.length);
    await setTimeout(() => setLoading(true), 50);
  };

  useEffect(() => {
    getStcsLength();
  }, []);

  const onClick = async (bookId: string) => {
    setIsModal(true);
  };

  const onDeleteCancel = () => {
    setIsModal(false);
  };

  const onDeleteConfirm = async (bookId: string) => {
    await fetcher(DELETE_BOOK, { id: bookId });
    history.push('/');
  };

  return (
    <>
      <ButtonsContainer
        pageName='needToDelete'
        id={bookId}
        onClick={onClick}
        isModal={isModal}
        onDeleteCancel={onDeleteCancel}
        onDeleteConfirm={onDeleteConfirm}
      />
      {!loading ? (
        <Loading />
      ) : (
        <>
          <MyCount count={booksLength} title='나의 기록' />
          {stcs.length > 0 ? (
            <Ul>
              {stcs.map(stc => (
                <Sentence
                  key={stc.id}
                  text={stc.text}
                  id={stc.id}
                  bookId={bookId}
                  trimedBookId={trimedBookId}
                  title={title}
                />
              ))}
            </Ul>
          ) : (
            <Message text='나만의 첫 문장을 기록해보세요.' />
          )}
        </>
      )}
      <div ref={fetchMoreEl}></div>
    </>
  );
};

export default SentenceListContainer;
