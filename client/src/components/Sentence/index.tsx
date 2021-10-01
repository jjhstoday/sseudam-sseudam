import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Li, ClipIcon } from './styles';

interface Props {
  text: string;
  id: string;
  bookId: string;
  trimedBookId: string;
  title: string;
}
const Sentence: FC<Props> = ({ text, id, bookId, trimedBookId, title }) => {
  return (
    <Li>
      <Link
        to={{
          pathname: `/book/${trimedBookId}/sentence/${id}`,
          state: { text, id, bookId, title }
        }}
      >
        <ClipIcon />
        <div>
          <p>{text}</p>
        </div>
      </Link>
    </Li>
  );
};

export default Sentence;
