import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema/index.js';
import resolvers from './resolvers/index.js';
import { readDB } from './dbController.js';
import request from 'request';

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
const ID_KEY = '0Xw0kbNgPLwxFPxcR36e';
const SECRET_KEY = 'hMNy96XrBF';

app.get('/', (req, res) => {
  const api_url = 'https://openapi.naver.com/v1/search/book_adv.json?d_titl=' + encodeURI(req.query[0]);

  const options = {
    url: api_url,
    headers: {
      'X-Naver-Client-Id': ID_KEY,
      'X-Naver-Client-Secret': SECRET_KEY,
    },
  };

  request.get(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, {
        'Content-Type': 'text/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

await server.start();
server.applyMiddleware({
  app,
  path: '/graphql',
  cors: {
    origin: [
      'http://localhost:3000',
      'https://studio.apollographql.com',
      'https://openapi.naver.com',
      'http://54.180.90.74',
    ],
    credentials: true,
  },
});

await app.listen({ port: 8000 });
console.log('server listening on 8000...');
