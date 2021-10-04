import CloseButton from 'components/CloseButton';
import ConfirmButton from 'components/ConfirmButton';
import DeleteButton from 'components/DeleteButton';
import UpdateButton from 'components/UpdateButton';
import React, { FC, MouseEventHandler } from 'react';
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
}

const ButtonsContainer: FC<Props> = ({
  pageName,
  id = '',
  onClick = () => {},
  readyToSubmit = false,
  text = '',
  trimedBookId = '',
  onUpdate = () => {},
  onSubmit = () => {}
}) => {
  return (
    <Container>
      <CloseButton />
      {pageName === 'needToContirm' && (
        <ConfirmButton onSubmit={onSubmit} readyToSubmit={readyToSubmit} />
      )}
      {pageName === 'needToDelete' && (
        <DeleteButton id={id} onClick={onClick} />
      )}
      {pageName === 'needToUpdate' && (
        <>
          <UpdateButton
            id={id}
            text={text}
            trimedBookId={trimedBookId}
            onUpdate={onUpdate}
          />
          <DeleteButton id={id} onClick={onClick} />
        </>
      )}
    </Container>
  );
};

export default ButtonsContainer;
