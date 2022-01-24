import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema/index.js';
import resolvers from './resolvers/index.js';
import { readDB } from './dbController.js';
import naverOpenApi from './naverOpenApi.js';
import { config } from 'dotenv';

config();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    db: {
      books: readDB('books'),
      sentences: readDB('sentences'),
    },
  },
});

const app = express();

app.get('/', (req, res) => naverOpenApi(req, res));

await server.start();
server.applyMiddleware({
  app,
  path: '/graphql',
  cors: {
    origin: [
      'http://localhost:3000',
      'https://studio.apollographql.com',
      'https://openapi.naver.com',
      'http://52.78.73.51',
    ],
    credentials: true,
  },
});

await app.listen({ port: 8000 });
console.log('server listening on 8000...');
