import { v4 } from 'uuid';
import { writeDB } from '../dbController.js';

const setStcs = data => writeDB('sentences', data);

const stcResolver = {
  Query: {
    sentences: (parent, args, { db }) => {
      return db.sentences;
    },
    sentence: (parent, { id = '' }, { db }) => {
      return db.sentences.find(stc => stc.id === id);
    }
  },
  Mutation: {
    createSentence: (parent, { text, bookId }, { db }) => {
      const newStc = {
        id: v4(),
        text,
        bookId
      };
      db.sentences.unshift(newStc);
      setBooks(db.sentences);
      return newStc;
    },
    updateSentence: (parent, { id, text }, { db }) => {
      const targetIndex = db.sentences.findIndex(stc => stc.id === id);
      if (targetIndex < 0) throw Error('문장이 없습니다.');
      const newStc = { ...db.sentences[targetIndex], text };
      db.sentences.splice(targetIndex, 1, newStc);
      setStcs(db.sentences);
      return newStc;
    },
    deleteSentence: (parent, { id }, { db }) => {
      const targetIndex = db.sentences.findIndex(stc => stc.id === id);
      if (targetIndex < 0) throw Error('문장이 없습니다.');
      db.sentences.splice(targetIndex, 1);
      setStcs(db.sentences);
      return id;
    }
  }
};

export default stcResolver;
