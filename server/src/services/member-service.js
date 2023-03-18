import { memberModel } from '../db/index.js';

class MemberService {
  constructor(memberModel) {
    this.memberModel = memberModel;
  }

  async getMembers() {
    return await this.memberModel.findAll();
  }

  async getMembersExcludePapers() {
    return await this.memberModel.findAllExcludePapers();
  }

  async getMemberByOid(memberOid) {
    return await this.memberModel.findByOid({ _id: memberOid });
  }

  async addMember(memberInfo) {
    return await this.memberModel.create(memberInfo);
  }
}

const memberService = new MemberService(memberModel);

export { memberService };
