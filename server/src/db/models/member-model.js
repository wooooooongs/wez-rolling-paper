import { model } from 'mongoose';
import MemberSchema from '../schemas/member-schema.js';

const Member = model('member', MemberSchema);

export class MemberModel {
  async findAll() {
    return await Member.find();
  }

  async create(memberInfo) {
    return await Member.create(memberInfo);
  }
}

const memberModel = new MemberModel();

export { memberModel };
