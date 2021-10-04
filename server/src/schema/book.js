import { gql } from 'apollo-server-express';

const bookSchema = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    image: String
    sentences: [Sentence]
  }

  extend type Query {
    books(cursor: ID): [Book!]!
    book(id: ID!): Book!
  }

  extend type Mutation {
    createBook(title: String!, author: String!, image: String): Book!
    deleteBook(id: ID!): ID!
  }
`;

export default bookSchema;
