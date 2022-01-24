import React, { FC, ReactNode } from 'react';

import { Footer, Header } from 'components';

interface Props {
  title: string;
  children: ReactNode;
}

const AppLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Header title={title} />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
