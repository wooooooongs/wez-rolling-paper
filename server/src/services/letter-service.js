import { letterModel, memberModel } from '../db/index.js';

class LetterService {
  constructor(letterModel) {
    this.letterModel = letterModel;
  }

  async getLetterById(letterOid) {
    return await this.letterModel.findById({ _id: letterOid });
  }

  async addLetter(letterInfo, memberOid) {
    const createdLetter = await this.letterModel.create(letterInfo);
    const { _id } = createdLetter;

    return await memberModel.update({ _id: memberOid }, _id);
  }
}

const letterService = new LetterService(letterModel);

export { letterService };
