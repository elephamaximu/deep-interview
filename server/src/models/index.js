import mongoose from 'mongoose';
import UserModel from './User.js';

const db = {};

db.mongoose = mongoose;
db.url = 'mongodb://mongo-srv:27017/deep_intervew_db';
db.User = new UserModel(mongoose);

export default db;
