import express from 'express';
import { ApiUrl } from '../../client/src/constants/ApiUrl.js';
import { memberRouter } from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(ApiUrl.MEMBER, memberRouter);

export { app };
