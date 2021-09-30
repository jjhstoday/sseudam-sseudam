import React, { FC } from 'react';
import { P } from './styles';
import SadFace from 'assets/icon/sad-face.png';

interface Props {
  text: string;
}
const Message: FC<Props> = ({ text }) => {
  return (
    <P>
      {text}
      <img src={SadFace} alt='sad-face' />
    </P>
  );
};

export default Message;
