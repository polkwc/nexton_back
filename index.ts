import express, {Request} from 'express';

import bodyParser from 'body-parser';
import errorMiddleware from './src/middlewares/error.middleware';
import config  from './config';
import cors from 'cors';
const app = express();

app.use(bodyParser.json());
import routes from './src/routes';

app.use(cors<Request>());

app.use('/', routes);
app.use(errorMiddleware);

const host = config.host;
const port = config.port;
const name = config.name;
const version = config.version;

app.listen(port, () => {
  console.log(`${name} ${version} -- server running on ${host}:${port}`);
});
