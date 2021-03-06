import request from 'request';

const naverOpenApi = (req, res) => {
  const api_url = 'https://openapi.naver.com/v1/search/book_adv.json?d_titl=' + encodeURI(req.query[0]);

  const options = {
    url: api_url,
    headers: {
      'X-Naver-Client-Id': process.env.NAVER_OPEN_API_ID_KEY,
      'X-Naver-Client-Secret': process.env.NAVER_OPEN_API_SECRET_KEY,
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
};

export default naverOpenApi;
