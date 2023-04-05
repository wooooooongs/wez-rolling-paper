import { model } from 'mongoose';
import MemberSchema from '../schemas/member-schema.js';

const Member = model('member', MemberSchema);

export class MemberModel {
  async findAll() {
    return await Member.find().populate('letters');
  }

  async findAllExcludeLetters() {
    return await Member.find().select('-letters');
  }

  async findByOid(memberOid) {
    return await Member.findOne(memberOid).populate('letters');
  }

  async create(memberInfo) {
    return await Member.create(memberInfo);
  }

  async update(memberOid, letterOid) {
    return await Member.updateOne(
      memberOid,
      { $push: { letters: letterOid } },
      { new: true },
    );
  }
}

const memberModel = new MemberModel();

export { memberModel };
