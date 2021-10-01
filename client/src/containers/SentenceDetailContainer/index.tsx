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
}

const SentenceDetailContainer: FC<Props> = ({ id, bookId, text, title }) => {
  const history = useHistory();

  const onClick = async (id: string) => {
    await fetcher(DELETE_SENTENCE, { id });
    history.goBack();
  };

  return (
    <>
      <CloseButton />
      <UpdateButton />
      <DeleteButton id={id} onClick={onClick} />
      <SentenceDetail title={title} text={text} />
    </>
  );
};

export default SentenceDetailContainer;
