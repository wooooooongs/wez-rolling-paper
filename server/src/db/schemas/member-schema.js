import { Schema } from 'mongoose';
import { nanoid } from 'nanoid';

const {
  Types: { ObjectId },
} = Schema;

const MemberSchema = new Schema(
  {
    letters: [
      {
        type: ObjectId,
        require: true,
        ref: 'letter',
      },
    ],
    memberId: {
      type: String,
      default: () => nanoid(5),
    },
    available: {
      type: Boolean,
      require: true,
    },
    name: {
      type: String,
      requred: true,
    },
    birthDay: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: false,
      trim: true,
      default: '0000',
    },
    profileImage: {
      type: String,
      require: false,
      default: null,
    },
    coverImage: {
      type: String,
      require: false,
      default: null,
    },
    music: {
      type: String,
      require: false,
      default: null,
    },
  },
  {
    collection: 'members',
    timestamps: true,
  },
);

export default MemberSchema;
