import React, { FC } from 'react';
import { Li, ClipIcon } from './styles';

interface Props {
  text: string;
}
const Sentence: FC<Props> = ({ text }) => {
  return (
    <Li>
      <ClipIcon />
      <p>{text}</p>
    </Li>
  );
};

export default Sentence;
