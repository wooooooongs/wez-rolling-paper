import { Schema } from 'mongoose';

const MemberSchema = new Schema(
  {
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
    },
    profileImage: {
      type: String,
      require: false,
    },
    coverImage: {
      type: String,
      require: false,
    },
    music: {
      type: String,
      require: false,
    },
  },
  {
    collection: 'members',
    timestamps: true,
  },
);

export default MemberSchema;
