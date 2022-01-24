import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { lightPalette } from 'styles';
import { IconContainer, PlusIcon } from './styles';

interface Props {
  moveToPage: string;
  id?: string;
}
const AddButton: FC<Props> = ({ moveToPage, id = '' }) => {
  const color = moveToPage === '/postingBook' ? lightPalette.themeSecondaryFont : lightPalette.themePrimaryFont;

  return (
    <Link
      to={{
        pathname: moveToPage,
        state: {
          id,
        },
      }}
    >
      <IconContainer $color={color}>
        <PlusIcon />
      </IconContainer>
    </Link>
  );
};

export default AddButton;
