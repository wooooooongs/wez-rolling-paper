import { model } from 'mongoose';
import MemberSchema from '../schemas/member-schema.js';

const Member = model('member', MemberSchema);

export class MemberModel {
  async findAll() {
    return await Member.find().populate('papers');
  }

  async findAllExcludePapers() {
    return await Member.find().select('-papers');
  }

  async findById(memberOid) {
    return await Member.findOne(memberOid);
  }

  async create(memberInfo) {
    return await Member.create(memberInfo);
  }

  async update(memberOid, paperOid) {
    return await Member.updateOne(
      memberOid,
      { $push: { papers: paperOid } },
      { new: true },
    );
  }
}

const memberModel = new MemberModel();

export { memberModel };
