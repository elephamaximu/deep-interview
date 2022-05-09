import express from 'express';
import { body, validationResult } from 'express-validator';
import { FormValidationError } from '../errors/form-validation-error.js';
import { currentUserChecker } from '../middlewares/currentuser-checker.js';
import AuthService from '../services/auth.js';

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

export { router as authRouter };
