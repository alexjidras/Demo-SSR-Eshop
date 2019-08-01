import express from 'express';
import path from 'path';
import router from './lib/router';
import { renderer } from './lib/middleware';
const port = process.env.PORT || 4000;

const server = express();
server.use(express.static(path.join(__dirname, './static')));
server.use(renderer);

server.use('/', router);

server.listen(port, () => console.log(`Listening on ${port}`));