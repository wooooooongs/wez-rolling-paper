import { Schema } from 'mongoose';

const PaperSchema = new Schema(
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
    collection: 'papers',
    timestamps: true,
  },
);

export default PaperSchema;
