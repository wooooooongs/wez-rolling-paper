import mongoose from 'mongoose';

const DB_URL = process.env.MONGODB_URL || 'MongoDB 서버 주소를 확인해주세요.';

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('connected', () => console.log('MongoDB 서버 연결 완료!' + DB_URL));
db.on('error', (err) =>
  console.error('\n MongoDB 서버 연결 실패..' + DB_URL + '\n' + err),
);

export * from './models/member-model.js';
export * from './models/letter-model.js';
