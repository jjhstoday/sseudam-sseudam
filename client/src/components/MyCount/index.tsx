import React, { FC } from 'react';

import { BookIcon, HeartIcon, Span } from './styles';

interface Props {
  count: number;
  title: string;
}

const MyCount: FC<Props> = ({ count = 0, title }) => {
  return (
    <Span>
      {title === '나의 책장' ? <BookIcon /> : <HeartIcon />}
      {title} &#40;{count}&#41;
    </Span>
  );
};

export default MyCount;
