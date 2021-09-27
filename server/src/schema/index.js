import { gql } from 'apollo-server-express';
import bookSchema from './book.js';
import sentenceSchema from './sentence.js';

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, bookSchema, sentenceSchema];
