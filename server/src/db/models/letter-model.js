import { model } from 'mongoose';
import LetterSchema from '../schemas/letter-schema.js';

const Letter = model('letter', LetterSchema);

export class LetterModel {
  async findById(letterOid) {
    return await Letter.findOne(letterOid);
  }

  async create(letterInfo) {
    return await Letter.create(letterInfo);
  }
}

const letterModel = new LetterModel();

export { letterModel };
