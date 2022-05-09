import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import db from './models/index.js';

import { RouteNotFoundError } from './errors/route-not-found-error.js';
import { errorHandler } from './middlewares/error-handler.js';
import { authRouter } from './routes/auth.js';

const start = async () => {
	const app = express();

	app.set('trust proxy', true);

	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(
		cookieSession({
			signed: false,
			secure: true,
		})
	);

	db.mongoose
		.connect('mongodb://mongo-srv:27017/deep_interview_db')
		.then(() => {
			console.log(' ### 몽고DB 연결 성공 ### ');
		})
		.catch((err) => {
			console.log(' 몽고DB와 연결 실패', err);
			process.exit();
		});

	if (!process.env.JWT_SECRET) {
		throw new Error('JWT_SECRET이 설정되지 않았습니다.');
	}

	app.use(authRouter);

	app.get('*', () => {
		throw new RouteNotFoundError();
	});

	app.use(errorHandler);

	app.listen(5000, () => {
		console.log('********** 서버가 정상적으로 실행되고 있습니다! *********');
	});
};

start();
