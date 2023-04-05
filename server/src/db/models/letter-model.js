import { model } from 'mongoose';
import PaperSchema from '../schemas/paper-schema.js';

const Paper = model('paper', PaperSchema);

export class PaperModel {
  async findById(paperOid) {
    return await Paper.findOne(paperOid);
  }

  async create(paperInfo) {
    return await Paper.create(paperInfo);
  }
}

const paperModel = new PaperModel();

export { paperModel };
