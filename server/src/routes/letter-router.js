import { Router } from 'express';

import { letterService } from '../services/index.js';

const letterRouter = Router();

letterRouter.get('/:letterOid', async (req, res, next) => {
  try {
    const { letterOid } = req.params;

    const currentLetter = await letterService.getLetterById(letterOid);

    res.status(200).json(currentLetter);
  } catch (err) {
    next(err);
  }
});

letterRouter.post('/:memberOid', async (req, res, next) => {
  try {
    const { memberOid } = req.params;
    const { contents, nickname, color } = req.body;

    const newLetter = await letterService.addLetter(
      {
        contents,
        nickname,
        color,
      },
      memberOid,
    );

    res.status(200).json(newLetter);
  } catch (err) {
    next(err);
  }
});

export { letterRouter };
