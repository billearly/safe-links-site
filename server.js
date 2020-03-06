require('dotenv').config();

const express = require('express');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const apiSource = require("./source/safe-links-api");

const port = process.env.PORT;

const createServer = () => {
  const server = express();

  server.get('/api/v1/link/:link', (req, res) => {
    apiSource.getLinkLocation(req.params.link)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        res.status(error.response.status).send(error.response.data);
      });
  });

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    return handle(req, res, parsedUrl);
  });

  return server;
}

if (process.env.IN_LAMBDA) {
  module.exports = createServer();
} else {
  app.prepare().then(() => {
    const server = createServer();

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
}
