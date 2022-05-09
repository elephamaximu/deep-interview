import express from 'express';
import 'express-async-errors';
import { DatabaseConnectionError } from './errors/database-connection-error.js';
import { RouteNotFoundError } from './errors/route-not-found-error.js';
import { errorHandler } from './middlewares/error-handler.js';
import db from './models/index.js';
import { authRouter } from './routes/auth.js';

const start = async () => {
	const app = express();

	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());

	app.use(authRouter);

	app.get('*', () => {
		throw new RouteNotFoundError();
	});

	app.use(errorHandler);

	db.mongoose
		.connect('mongodb://mongo-srv:27017/deep_intervew_db')
		.then(() => {
			console.log(' ### 몽고DB 연결 성공 ### ');
		})
		.catch((err) => {
			throw new DatabaseConnectionError();
		});

	app.listen(5000, () => {
		console.log('********** 서버가 정상적으로 실행되고 있습니다! *********');
	});
};

start();
