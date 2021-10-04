import React, { FC, useEffect, useState } from 'react';
import { Ul } from './styles';
import { DELETE_BOOK } from 'graphql/book';
import { fetcher } from 'queryClient';
import { useHistory } from 'react-router-dom';
import Sentence from 'components/Sentence';
import { GET_SENTENCES } from 'graphql/sentence';
import MyCount from 'components/MyCount';
import ButtonsContainer from 'containers/ButtonsContainer';
import Message from 'components/Message';

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

  const getServerSideData = async () => {
    const { sentences: sStcs } = await fetcher(GET_SENTENCES, { bookId });
    setStcs(sStcs);
  };

  useEffect(() => {
    getServerSideData();
  }, []);

  const onClick = async (bookId: string) => {
    await fetcher(DELETE_BOOK, { id: bookId });
    history.push('/');
  };

  return (
    <>
      <ButtonsContainer pageName='needToDelete' id={bookId} onClick={onClick} />
      <MyCount count={stcs.length} title='나의 기록' />
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
  );
};

export default SentenceListContainer;
