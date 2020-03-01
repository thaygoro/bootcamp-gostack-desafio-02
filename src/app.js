import express from 'express';

const server = express();

server.get("/", function(req, res) {
  res.json({message: 'Teste'});
})

server.listen(3000);