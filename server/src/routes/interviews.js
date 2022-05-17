import express from 'express';
import { currentUserChecker } from '../middlewares/currentuser-checker.js';
import { jwtGuard } from '../middlewares/jwt-guard.js';
import { userCouponChecker } from '../middlewares/user-coupon-checker.js';
import InterviewService from '../services/interview.js';

const router = express.Router();
const interviewService = InterviewService();

router.get(
	'/api/interviews',
	currentUserChecker,
	jwtGuard,
	async (req, res) => {
		const existingInterview = await interviewService.getInterviewList(req);

		res.status(200).send(existingInterview);
	}
);

router.post(
	'/api/interviews/key',
	currentUserChecker,
	jwtGuard,
	userCouponChecker,
	async (req, res) => {
		const interview = await interviewService.getModelKey(req);
		res.status(200).send(interview);
	}
);

router.post(
	'/api/interviews/video',
	currentUserChecker,
	jwtGuard,

	async (req, res) => {
		const interview = await interviewService.findVideo(req);
		res.status(200).send(interview);
	}
);

router.post(
	'/api/interviews',
	currentUserChecker,
	jwtGuard,
	async (req, res) => {
		const interview = await interviewService.createInterview(req);
		res.status(200).send(interview);
	}
);

router.get(
	'/api/interviews/:id',
	currentUserChecker,
	jwtGuard,
	async (req, res) => {
		const existingInterview = await interviewService.getSingleInterview(req);

		res.status(200).send(existingInterview);
	}
);

export { router as interviewRouter };
