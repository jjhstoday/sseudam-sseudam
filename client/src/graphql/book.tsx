import { gql } from 'graphql-tag';

export const GET_BOOKS = gql`
  query GET_BOOKS {
    books {
      id
      title
      author
      image
      sentences {
        id
        bookId
        text
      }
    }
  }
`;

export const GET_BOOK = gql`
  query GET_BOOK($id: ID!) {
    book(id: $id) {
      id
      title
      author
      image
      sentences {
        id
        bookId
        text
      }
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation CREATE_BOOK($title: String!, $author: String!, $image: String) {
    createBook(title: $title, author: $author, image: $image) {
      id
      title
      author
      image
      sentences {
        id
        bookId
        text
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DELETE_BOOK($id: ID!) {
    deleteBook(id: $id)
  }
`;
