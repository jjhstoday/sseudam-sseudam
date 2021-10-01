import { gql } from 'apollo-server-express';

const sentenceSchema = gql`
  type Sentence {
    id: ID!
    bookId: ID!
    text: String!
  }

  extend type Query {
    sentences(bookId: ID!): [Sentence]!
    sentence(id: ID!): Sentence!
  }

  extend type Mutation {
    createSentence(text: String!, bookId: ID!): Sentence!
    updateSentence(id: ID!, text: String!): Sentence!
    deleteSentence(id: ID!): ID!
  }
`;

export default sentenceSchema;
