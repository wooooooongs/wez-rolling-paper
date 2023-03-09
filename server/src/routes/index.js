import express from 'express';

import { memberRouter } from './member-router.js';
import { ApiUrl } from '../../../client/src/constants/ApiUrl.js';

const router = express.Router();

router.use(ApiUrl.MEMBER, memberRouter);

export { router };
