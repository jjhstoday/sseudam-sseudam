import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Book, PostingBook, PostingSentence, EditSentence, Sentence } from 'pages';

import GlobalStyle from 'styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/book/:bookId' component={Book} />
        <Route path='/postingBook' component={PostingBook} />
        <Route exact path='/book/:bookId/sentence/:sentenceId' component={Sentence} />
        <Route path='/book/:bookId/postingSentence' component={PostingSentence} />
        <Route path='/book/:bookId/editSentence' component={EditSentence} />
      </Switch>
    </>
  );
}

export default App;
