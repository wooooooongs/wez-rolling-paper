import { paperModel, memberModel } from '../db/index.js';

class PaperService {
  constructor(paperModel) {
    this.paperModel = paperModel;
  }

  async getPaperById(paperOid) {
    return await this.paperModel.findById({ _id: paperOid });
  }

  async addPaper(paperInfo, memberOid) {
    const createdPaper = await this.paperModel.create(paperInfo);
    const { _id } = createdPaper;

    return await memberModel.update({ _id: memberOid }, _id);
  }
}

const paperService = new PaperService(paperModel);

export { paperService };
