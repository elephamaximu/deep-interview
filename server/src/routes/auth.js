import express from 'express';
import { body, validationResult } from 'express-validator';
import { FormValidationError } from '../errors/form-validation-error.js';
import { currentUserChecker } from '../middlewares/currentuser-checker.js';
import AuthService from '../services/auth.js';
import InterviewService from '../services/interview.js';

const router = express.Router();

const authService = AuthService();
const interviewService = InterviewService();

router.post(
	'/api/auth/signup',
	[body('email').isEmail(), body('password').trim().isLength({ min: 5 })],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw new FormValidationError();
		}

		const user = await authService.signup(req);

		res.status(201).send(user);
	}
);

router.post(
	'/api/auth/signin',
	[body('email').isEmail(), body('password').trim().isLength({ min: 5 })],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw new FormValidationError();
		}

		const user = await authService.signin(req);

		res.status(200).send(user);
	}
);

router.post('/api/auth/signout', (req, res) => {
	req.session = null;

	res.send({});
});

router.get('/api/auth/currentuser', currentUserChecker, (req, res) => {
	res.send({ currentUser: req.currentUser || null });
});

router.get('/api/auth/user', currentUserChecker, async (req, res) => {
	const existingUser = await authService.findUser(req);

	const existingInterview = await interviewService.getInterviewList(req);
	res.status(200).send({ existingUser, existingInterview });
});

export { router as authRouter };
