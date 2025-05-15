const routes = require('express').Router();
const temple = require('./temple');

routes.use('/temples', temple);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://app.swaggerhub.com/apis/byuidaho-cc9/tamples/1.0.0',
    };
    res.send(docData);
  })
);

module.exports = routes;
