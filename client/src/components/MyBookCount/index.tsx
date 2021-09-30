import React, { FC } from 'react';
import { BookIcon, Span } from './styles';

interface Props {
  count: number;
}

const MyBookCount: FC<Props> = ({ count = 0 }) => {
  return (
    <Span>
      <BookIcon />
      나의 책장 &#40;{count}&#41;
    </Span>
  );
};

export default MyBookCount;
