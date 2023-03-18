import express from 'express';

import { memberRouter } from './member-router.js';
import { paperRouter } from './paper-router.js';
import { ApiUrl } from '../../../client/src/constants/ApiUrl.js';

const router = express.Router();

router.use(ApiUrl.MEMBER, memberRouter);
router.use(ApiUrl.PAPER, paperRouter);

export { router };
