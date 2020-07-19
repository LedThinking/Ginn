const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    name: 'Júnior',
    phone: 083987665883
  })
})

module.exports = routes