import { Router } from 'express';

import { paperService } from '../services/index.js';

const paperRouter = Router();

paperRouter.get('/:paperOid', async (req, res, next) => {
  try {
    const { paperOid } = req.params;

    const currentPaper = await paperService.getPaperById(paperOid);

    res.status(200).json(currentPaper);
  } catch (err) {
    next(err);
  }
});

paperRouter.post('/:memberOid', async (req, res, next) => {
  try {
    const { memberOid } = req.params;
    const { contents, nickname, color } = req.body;

    const newPaper = await paperService.addPaper(
      {
        contents,
        nickname,
        color,
      },
      memberOid,
    );

    res.status(200).json(newPaper);
  } catch (err) {
    next(err);
  }
});

export { paperRouter };
