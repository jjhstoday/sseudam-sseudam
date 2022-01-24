import React from 'react';

import { ReactComponent as LoadingIcon } from 'assets/loading.svg';
import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <LoadingIcon />
    </Container>
  );
}
