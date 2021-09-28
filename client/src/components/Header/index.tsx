import CloseButton from 'components/CloseButton';
import ConfirmButton from 'components/ConfirmButton';
import React, { FC } from 'react';
import { HeaderContainer, Divider } from './styles';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <HeaderContainer>
      <div>
        {title !== '쓰담쓰담' && <CloseButton />}
        <span>{title}</span>
        {title !== '쓰담쓰담' && <ConfirmButton />}
      </div>
      <Divider />
    </HeaderContainer>
  );
};

export default Header;
