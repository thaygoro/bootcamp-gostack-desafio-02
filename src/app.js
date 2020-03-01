import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.json({ message: 'Teste' });
});

server.listen(3000);
