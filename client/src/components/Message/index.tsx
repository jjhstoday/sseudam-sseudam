import React, { FC } from 'react';
import { P } from './styles';

interface Props {
  text: string;
}
const Message: FC<Props> = ({ text }) => {
  return <P>{text}</P>;
};

export default Message;
