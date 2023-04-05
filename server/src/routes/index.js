import express from 'express';

import { memberRouter } from './member-router.js';
import { letterRouter } from './letter-router.js';
import { ApiUrl } from '../constants/ApiUrl.js';

const router = express.Router();

router.use(ApiUrl.MEMBER, memberRouter);
router.use(ApiUrl.LETTER, letterRouter);

export { router };
