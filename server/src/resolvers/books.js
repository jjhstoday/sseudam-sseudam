import { v4 } from 'uuid';
import { writeDB } from '../dbController.js';

const setBooks = data => writeDB('books', data);

const bookResolver = {
  Query: {
    books: (parent, { cursor = '' }, { db }) => {
      if (cursor === 'all') return db.books;
      else {
        const fromIndex = db.books.findIndex(book => book.id === cursor) + 1;
        return db.books?.slice(fromIndex, fromIndex + 15) || [];
      }
    },
    book: (parent, { id = '' }, { db }) => {
      return db.books.find(book => book.id === id);
    }
  },
  Mutation: {
    createBook: (parent, { title, author, image }, { db }) => {
      const newBook = {
        id: v4(),
        title,
        author,
        image
      };
      db.books.unshift(newBook);
      setBooks(db.books);
      return newBook;
    },
    deleteBook: (parent, { id }, { db }) => {
      const targetIndex = db.books.findIndex(book => book.id === id);
      if (targetIndex < 0) throw Error('책이 없습니다.');
      db.books.splice(targetIndex, 1);
      setBooks(db.books);
      return id;
    }
  },
  Book: {
    sentences: (book, args, { db }) => {
      const newStcs = [...db.sentences];
      return newStcs.filter(stc => stc.bookId === book.id);
    }
  }
};

export default bookResolver;
