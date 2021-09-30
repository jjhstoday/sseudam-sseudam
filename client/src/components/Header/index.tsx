import React, { FC } from 'react';
import { HeaderContainer, Divider } from './styles';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <HeaderContainer>
      <h2>{title}</h2>
      <Divider />
    </HeaderContainer>
  );
};

export default Header;
