import { gql } from 'apollo-server-express';

const sentenceSchema = gql`
  type Sentence {
    id: ID!
    bookId: ID!
    text: String!
  }

  extend type Query {
    sentences: [Sentence!]!
    sentence(id: ID!): Sentence!
  }

  extend type Mutation {
    createSentence(text: String!, id: ID!): Sentence!
    updateSentence(id: ID!, text: String!, bookId: ID!): Sentence!
    deleteSentence(id: ID!, bookId: ID!): ID!
  }
`;

export default sentenceSchema;
