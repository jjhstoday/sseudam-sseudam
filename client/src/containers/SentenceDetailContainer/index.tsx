import CloseButton from 'components/CloseButton';
import DeleteButton from 'components/DeleteButton';
import SentenceDetail from 'components/SentenceDetail';
import UpdateButton from 'components/UpdateButton';
import { DELETE_SENTENCE } from 'graphql/sentence';
import { fetcher } from 'queryClient';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  id: string;
  bookId: string;
  text: string;
  title: string;
  trimedBookId: string;
}

const SentenceDetailContainer: FC<Props> = ({
  id,
  bookId,
  text,
  title,
  trimedBookId
}) => {
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
        trimedBookId
      }
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
        trimedBookId
      }
    });
  };

  return (
    <>
      <CloseButton />
      <UpdateButton
        id={id}
        text={text}
        trimedBookId={trimedBookId}
        onUpdate={onUpdate}
      />
      <DeleteButton id={id} onClick={onClick} />
      <SentenceDetail title={title} text={text} />
    </>
  );
};

export default SentenceDetailContainer;
