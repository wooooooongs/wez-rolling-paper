import express from 'express';
import { router } from './routes/index.js';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: process.env.WHITE_LIST,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

export { app };
