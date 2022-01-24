import React, { useEffect } from 'react';

import { SearchingBookContainer } from 'containers';
import { AppLayout } from 'components';

export default function PostingBook() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout title='책 등록'>
      <section>
        <SearchingBookContainer />
      </section>
    </AppLayout>
  );
}
