import CloseButton from 'components/CloseButton';
import React, { FC, useEffect, useState } from 'react';
import { Ul } from './styles';
import DeleteButton from 'components/DeleteButton';
import { DELETE_BOOK } from 'graphql/book';
import { fetcher } from 'queryClient';
import { useHistory } from 'react-router-dom';
import Sentence from 'components/Sentence';
import { GET_SENTENCES } from 'graphql/sentence';

interface Props {
  id: string;
}

interface Sentences {
  id: string;
  text: string;
  bookId: string;
}

const SentencesContainer: FC<Props> = ({ id }) => {
  const history = useHistory();
  const [stcs, setStcs] = useState<Sentences[]>([]);

  const getServerSideData = async () => {
    const { sentences: sStcs } = await fetcher(GET_SENTENCES, { bookId: id });
    setStcs(sStcs);
  };

  useEffect(() => {
    getServerSideData();
  }, []);

  const onClick = async (id: string) => {
    await fetcher(DELETE_BOOK, { id });
    history.push('/');
  };

  if (!stcs.length) return null;

  return (
    <>
      <CloseButton />
      <DeleteButton id={id} onClick={onClick} />
      <Ul>
        {stcs.length &&
          stcs.map(stc => <Sentence key={stc.id} text={stc.text} />)}
      </Ul>
    </>
  );
};

export default SentencesContainer;
