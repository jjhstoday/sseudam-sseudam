import React from 'react';

import { BookListContainer } from 'containers';
import { AddButton, AppLayout } from 'components';

export default function Home() {
  return (
    <AppLayout title='쓰담쓰담'>
      <section>
        <BookListContainer />
      </section>
      <AddButton moveToPage='/postingBook' />
    </AppLayout>
  );
}
