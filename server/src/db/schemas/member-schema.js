import { Schema } from 'mongoose';

const {
  Types: { ObjectId },
} = Schema;

const MemberSchema = new Schema(
  {
    papers: [
      {
        type: ObjectId,
        require: true,
        ref: 'paper',
      },
    ],
    available: {
      type: Boolean,
      require: true,
    },
    name: {
      type: String,
      requred: true,
    },
    birthDay: {
      type: Date,
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
