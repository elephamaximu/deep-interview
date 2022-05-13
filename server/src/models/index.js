import mongoose from 'mongoose';
import UserModel from './User.js';
import InterviewModel from './Interview.js';

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const dbHost = process.env.MONGODB_HOSTNAME;
const port = process.env.MONGODB_PORT;
const database = process.env.MONGODB_DATABASE;

const options = {
	user: username,
	pass: password,
};

const db = {};

db.mongoose = mongoose;
db.url = `mongodb://${dbHost}:${port}/${database}`;
db.options = options;
db.User = new UserModel(mongoose);
db.Interview = new InterviewModel(mongoose);

export default db;
