import CloseButton from 'components/CloseButton';
import React, { FC } from 'react';
import { Ul } from './styles';
import DeleteButton from 'components/DeleteButton';
import { DELETE_BOOK } from 'graphql/book';
import { fetcher } from 'queryClient';
import { useHistory } from 'react-router-dom';

interface Props {
  id: string;
}
const SentencesContainer: FC<Props> = ({ id }) => {
  const history = useHistory();

  const onClick = async (id: string) => {
    await fetcher(DELETE_BOOK, { id });
    history.push('/');
  };

  return (
    <>
      <CloseButton />
      <DeleteButton id={id} onClick={onClick} />
      <Ul></Ul>
    </>
  );
};

export default SentencesContainer;
