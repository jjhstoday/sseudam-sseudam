import React, { FC } from 'react';

import { P } from './styles';

interface Props {
  text: string;
}
const Message: FC<Props> = ({ text }) => {
  const opacity = text === '검색한 책이 존재하지 않습니다...' ? true : false;
  return <P $opacity={opacity}>{text}</P>;
};

export default Message;
