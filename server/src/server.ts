import 'reflect-metadata';

import express, { request, response } from 'express';
import routes from './routes';

import uploadConfig from '../src/config/upload';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory))
app.use(routes);

app.listen(3333, () => {
  console.log('✔ Server started!');
});
