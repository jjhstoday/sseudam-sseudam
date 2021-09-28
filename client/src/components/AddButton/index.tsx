import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconContainer, PlusIcon } from './styles';

interface Props {
  moveToPage: string;
}

const AddButton: FC<Props> = ({ moveToPage }) => {
  return (
    <Link to='/postingBook'>
      <IconContainer>
        <PlusIcon />
      </IconContainer>
    </Link>
  );
};

export default AddButton;
