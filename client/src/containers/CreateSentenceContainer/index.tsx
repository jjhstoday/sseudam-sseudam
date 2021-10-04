import SentenceTextarea from 'components/SentenceTextarea';
import ButtonsContainer from 'containers/ButtonsContainer';
import { CREATE_SENTENCE } from 'graphql/sentence';
import { fetcher } from 'queryClient';
import React, { ChangeEventHandler, FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  id: string;
}
const CreateSentenceContainer: FC<Props> = ({ id }) => {
  const [text, setText] = useState('');
  const history = useHistory();

  const onSubmit = async () => {
    if (!text.trim()) return null;
    const trimedText = text.trim();
    await fetcher(CREATE_SENTENCE, { text: trimedText, bookId: id });
    history.goBack();
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    setText(e.target.value);
  };
  return (
    <>
      <ButtonsContainer
        pageName='needToContirm'
        onSubmit={onSubmit}
        readyToSubmit={!!text.trim()}
      />
      <SentenceTextarea text={text} onChange={onChange} />
    </>
  );
};

export default CreateSentenceContainer;
