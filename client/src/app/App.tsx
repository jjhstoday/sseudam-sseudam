import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Book from 'pages/Book';
import PostingBook from 'pages/PostingBook';
import PostingSentence from 'pages/PostingSentence';
import Sentence from 'pages/Sentence';
import GlobalStyle from 'styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/book/:bookId' component={Book} />
        <Route path='/postingBook' component={PostingBook} />
        <Route path='/book/:bookId/sentence/:sentenceId' component={Sentence} />
        <Route
          path='/book/:bookId/sentence/postingSentence'
          component={PostingSentence}
        />
      </Switch>
    </>
  );
}

export default App;
