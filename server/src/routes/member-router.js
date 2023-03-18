import { Router } from 'express';

import { memberService } from '../services/index.js';

const memberRouter = Router();

memberRouter.get('/', async (req, res, next) => {
  try {
    const member = await memberService.getMembers();

    res.status(200).json(member);
  } catch (err) {
    next(err);
  }
});

memberRouter.get('/only-member', async (req, res, next) => {
  try {
    const member = await memberService.getMembersExcludePapers();

    res.status(200).json(member);
  } catch (err) {
    next(err);
  }
});

memberRouter.get('/:memberOid', async (req, res, next) => {
  try {
    const { memberOid } = req.params;
    const member = await memberService.getMemberByOid(memberOid);

    res.status(200).json(member);
  } catch (err) {
    next(err);
  }
});

memberRouter.post('/', async (req, res, next) => {
  try {
    const { available, name, birthDay } = req.body;

    const member = await memberService.addMember({ available, name, birthDay });

    res.status(200).json(member);
  } catch (err) {
    next(err);
  }
});

export { memberRouter };
