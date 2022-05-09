import express from 'express';
import { body, validationResult } from 'express-validator';
import { FormValidationError } from '../errors/form-validation-error.js';
import UserService from '../services/user.js';

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
	UserService().signup
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
	UserService().signin
);

router.post('/api/auth/signout', (req, res) => {
	res.send({});
});

router.get('/api/auth/currentuser', (req, res) => {
	res.send({});
});

export { router as authRouter };
