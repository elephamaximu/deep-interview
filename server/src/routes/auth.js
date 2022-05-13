import express from 'express';
import { body, validationResult } from 'express-validator';
import { FormValidationError } from '../errors/form-validation-error.js';
import { currentUserChecker } from '../middlewares/currentuser-checker.js';
import AuthService from '../services/auth.js';
import axios from 'axios';

const router = express.Router();

router.post(
	'/api/auth/signup',
	[body('email').isEmail(), body('password').trim().isLength({ min: 5 })],
	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw new FormValidationError();
		}

		next();
	},
	AuthService().signup
);

router.post(
	'/api/auth/signin',
	[body('email').isEmail(), body('password').trim().isLength({ min: 5 })],
	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw new FormValidationError();
		}

		next();
	},
	AuthService().signin
);

router.post('/api/auth/signout', (req, res) => {
	req.session = null;

	res.send({});
});

router.get('/api/auth/currentuser', currentUserChecker, (req, res) => {
	res.send({ currentUser: req.currentUser || null });
});

// 나중에 옮길 코드들
router.post('/api/auth/video', async (req, res) => {
	try {
		const response = await axios.post(
			`${process.env.STUDIOS_BASE_URL}/makeVideo`,
			{
				appId: process.env.APP_ID,
				clientHostname: process.env.CLIENT_HOST_NAME,
				isClientToken: true,
				platform: 'web',
				sdk_v: '1.0',
				token: process.env.STUDIOS_TOKEN,
				uuid: process.env.UUID,
				language: 'ko',
				model: 'ysy',
				text: '조직을 이해하는 관점이 중요한데, 우리 회사의 핵심 가치는 무엇이라고 생각합니까?',
			}
		);
		const { success, data } = response.data;
		console.log(success, data);
		res.send(data);
	} catch (err) {
		console.log(err);
	}
});

router.post('/api/auth/find-video', async (req, res) => {
	try {
		console.log('find 서버 진입');
		const video_resopnse = await axios.post(
			`${process.env.STUDIOS_BASE_URL}/findProject`,
			{
				appId: process.env.APP_ID,
				clientHostname: process.env.CLIENT_HOST_NAME,
				isClientToken: true,
				platform: 'web',
				sdk_v: '1.0',
				token: process.env.STUDIOS_TOKEN,
				uuid: process.env.UUID,
				key: '',
			}
		);
		console.log(video_resopnse);
		const { success, data } = video_resopnse;
		if (success) {
			console.log(data);
			res.send(data);
		}
	} catch (err) {
		console.log(err);
	}
});

export { router as authRouter };
