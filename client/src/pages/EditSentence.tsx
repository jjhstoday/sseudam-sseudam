import React, { useEffect } from 'react';

import { UpdateSentenceContainer } from 'containers';
import { AppLayout } from 'components';

export default function EditSentence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout title='책 문장 수정'>
      <section>
        <UpdateSentenceContainer />
      </section>
    </AppLayout>
  );
}
