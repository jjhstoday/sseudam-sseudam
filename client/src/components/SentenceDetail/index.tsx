import React, { FC } from 'react';
import { Container } from './styles';

interface Props {
  title: string;
  text: string;
}
const SentenceDetail: FC<Props> = ({ title, text }) => {
  return (
    <Container>
      <p>{text}</p>
      <span>- {title} -</span>
    </Container>
  );
};

export default SentenceDetail;
