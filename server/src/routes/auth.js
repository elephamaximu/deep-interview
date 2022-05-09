import express from 'express';
import 'express-async-errors';
import { body, validationResult } from 'express-validator';
import { FormValidationError } from '../errors/form-validation-error.js';

const router = express.Router();

router.post(
	'/api/auth/signup',
	[body('email').isEmail(), body('password').trim().isLength({ min: 5 })],
	(req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw new FormValidationError();
		}

		res.send('signup');
	}
);

router.post(
	'/api/auth/signin',
	[body('email').isEmail(), body('password').trim().isLength({ min: 5 })],
	(req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw new FormValidationError();
		}

		res.send('signin');
	}
);

router.post('/api/auth/signout', (req, res) => {
	res.send('signout');
});

router.get('/api/auth/currentuser', (req, res) => {
	res.send('currentuser');
});

export { router as authRouter };
