import { Schema } from 'mongoose';

const LetterSchema = new Schema(
  {
    contents: {
      type: String,
      require: true,
    },
    nickname: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: false,
      default: '0000',
    },
    image: {
      type: String,
      require: false,
    },
  },
  {
    collection: 'letters',
    timestamps: true,
  },
);

export default LetterSchema;
