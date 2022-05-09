import express from 'express';
import { RouteNotFoundError } from './errors/route-not-found-error.js';
import { errorHandler } from './middlewares/error-handler.js';
import { authRouter } from './routes/auth.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authRouter);

app.get('*', () => {
	throw new RouteNotFoundError();
});

app.use(errorHandler);

app.listen(5000, () => {
	console.log('********** 서버가 정상적으로 실행되고 있습니다! *********');
});
