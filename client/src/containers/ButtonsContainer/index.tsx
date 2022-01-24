import React, { FC, MouseEventHandler } from 'react';

import { CloseButton, ConfirmButton, DeleteButton, UpdateButton } from 'components';
import { Container } from './styles';

interface Props {
  pageName: string;
  onSubmit?: MouseEventHandler<HTMLButtonElement>;
  onClick?: (id: string) => void;
  id?: string;
  readyToSubmit?: boolean;
  text?: string;
  trimedBookId?: string;
  onUpdate?: (id: string, text: string, trimedBookId: string) => void;
  isModal?: boolean;
  onDeleteCancel?: () => void;
  onDeleteConfirm?: (id: string) => void;
}

const ButtonsContainer: FC<Props> = ({
  pageName,
  id = '',
  onClick = () => {},
  readyToSubmit = false,
  text = '',
  trimedBookId = '',
  onUpdate = () => {},
  onSubmit = () => {},
  isModal = false,
  onDeleteCancel = () => {},
  onDeleteConfirm = () => {},
}) => {
  return (
    <Container>
      <CloseButton />
      {pageName === 'needToContirm' && <ConfirmButton onSubmit={onSubmit} readyToSubmit={readyToSubmit} />}
      {pageName === 'needToDelete' && (
        <DeleteButton
          id={id}
          onClick={onClick}
          isModal={isModal}
          onDeleteCancel={onDeleteCancel}
          onDeleteConfirm={onDeleteConfirm}
        />
      )}
      {pageName === 'needToUpdate' && (
        <>
          <UpdateButton id={id} text={text} trimedBookId={trimedBookId} onUpdate={onUpdate} />
          <DeleteButton id={id} onClick={onClick} />
        </>
      )}
    </Container>
  );
};

export default ButtonsContainer;
