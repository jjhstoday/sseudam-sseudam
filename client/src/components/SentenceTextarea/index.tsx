import React, { ChangeEventHandler, FC } from 'react';
import { Textarea } from './styles';

interface Props {
  text: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}
const SentenceTextarea: FC<Props> = ({ text, onChange }) => {
  return <Textarea autoFocus value={text} onChange={onChange}></Textarea>;
};

export default SentenceTextarea;
