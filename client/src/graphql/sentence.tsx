import { gql } from 'graphql-tag';

export const GET_SENTENCES = gql`
  query GET_SENTENCES($bookId: ID!) {
    sentences(bookId: $bookId) {
      id
      bookId
      text
    }
  }
`;

export const GET_SENTENCE = gql`
  query GET_SENTENCE($id: ID!) {
    sentence(id: $id) {
      id
      bookId
      text
    }
  }
`;

export const CREATE_SENTENCE = gql`
  mutation CREATE_SENTENCE($text: String!, $bookId: ID!) {
    createSentence(text: $text, bookId: $bookId) {
      id
      bookId
      text
    }
  }
`;

export const UPDATE_SENTENCE = gql`
  mutation UPDATE_SENTENCE($id: ID!, $text: String!) {
    updateSentence(id: $id, text: $text) {
      id
      bookId
      text
    }
  }
`;

export const DELETE_SENTENCE = gql`
  mutation DELETE_SENTENCE($id: ID!) {
    deleteSentence(id: $id)
  }
`;
