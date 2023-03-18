import { paperModel } from '../db/index.js';

class PaperService {
  constructor(paperModel) {
    this.paperModel = paperModel;
  }

  async getPaperById(paperOid) {
    return await this.paperModel.findById({ _id: paperOid });
  }

  async addPaper(paperInfo) {
    return await this.paperModel.create(paperInfo);
  }
}

const paperService = new PaperService(paperModel);

export { paperService };
