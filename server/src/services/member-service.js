import { memberModel } from '../db/index.js';

class MemberService {
  constructor(memberModel) {
    this.memberModel = memberModel;
  }

  async getMembers() {
    return await this.memberModel.findAll();
  }

  async addMember(memberInfo) {
    return await this.memberModel.create(memberInfo);
  }
}

const memberService = new MemberService(memberModel);

export { memberService };
