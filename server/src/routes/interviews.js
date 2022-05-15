import express from 'express';
import { body, validationResult } from 'express-validator';
import { FormValidationError } from '../errors/form-validation-error.js';
import { currentUserChecker } from '../middlewares/currentuser-checker.js';
import { jwtGuard } from '../middlewares/jwt-guard.js';
import { userCouponChecker } from '../middlewares/user-coupon-checker.js';
import InterviewService from '../services/interview.js';

const router = express.Router();

router.get(
	'/api/interviews',
	currentUserChecker,
	jwtGuard,
	(req, res, next) => {
		// next();
		res.send('hi');
	}
	// InterviewService().getInterview
);

router.post(
	'/api/interviews/key',
	currentUserChecker,
	jwtGuard,
	userCouponChecker,
	(req, res, next) => {
		next();
	},
	InterviewService().getModelKey
);

router.post(
	'/api/interviews/video',
	currentUserChecker,
	jwtGuard,

	(req, res, next) => {
		next();
	},
	InterviewService().findVideo
);

router.post(
	'/api/interviews',
	currentUserChecker,
	jwtGuard,
	(req, res, next) => {
		next();
	},
	InterviewService().createInterview
);

export { router as interviewRouter };
