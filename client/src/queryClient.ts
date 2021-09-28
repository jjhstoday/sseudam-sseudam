import { request } from 'graphql-request';
import { DocumentNode } from 'graphql/language/ast';
const URL = 'http://localhost:8000/graphql';

export const fetcher = (query: DocumentNode, variables = {}) =>
  request(URL, query, variables);

export const QueryKeys = {
  BOOKS: 'BOOKS',
  BOOK: 'BOOK',
  SENTENCES: 'SENTENCES',
  SENTENCE: 'SENTENCE'
};
