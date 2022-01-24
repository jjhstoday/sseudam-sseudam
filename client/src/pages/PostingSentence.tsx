import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { CreateSentenceContainer } from 'containers';
import { AppLayout } from 'components';
import { StateType } from 'pages/Sentence';

export default function PostingSentence() {
  const { state } = useLocation<StateType>();
  const id = state.id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout title='책 문장 기록'>
      <section>
        <CreateSentenceContainer id={id} />
      </section>
    </AppLayout>
  );
}
