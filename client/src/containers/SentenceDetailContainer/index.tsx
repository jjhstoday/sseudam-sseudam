import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { fetcher } from 'queryClient';
import { DELETE_SENTENCE } from 'graphql/sentence';

import { ButtonsContainer } from 'containers';
import { SentenceDetail } from 'components';

interface Props {
  id: string;
  bookId: string;
  text: string;
  title: string;
  trimedBookId: string;
}

const SentenceDetailContainer: FC<Props> = ({ id, bookId, text, title, trimedBookId }) => {
  const history = useHistory();

  const onClick = async (id: string) => {
    await fetcher(DELETE_SENTENCE, { id });
    history.push({
      pathname: `/book/${trimedBookId}`,
      state: {
        id,
        bookId,
        text,
        title,
        trimedBookId,
      },
    });
  };

  const onUpdate = async (id: string, text: string, trimedBookId: string) => {
    history.push({
      pathname: `/book/${trimedBookId}/editSentence`,
      state: {
        id,
        bookId,
        text,
        title,
        trimedBookId,
      },
    });
  };

  return (
    <>
      <ButtonsContainer
        pageName='needToUpdate'
        id={id}
        text={text}
        trimedBookId={trimedBookId}
        onUpdate={onUpdate}
        onClick={onClick}
      />
      <SentenceDetail title={title} text={text} />
    </>
  );
};

export default SentenceDetailContainer;
