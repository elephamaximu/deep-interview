import express from 'express';
import { body, validationResult } from 'express-validator';
import { FormValidationError } from '../errors/form-validation-error.js';
import { currentUserChecker } from '../middlewares/currentuser-checker.js';
import CouponService from '../services/coupon.js';
import { jwtGuard } from '../middlewares/jwt-guard.js';

const router = express.Router();

router.get(
	'/api/coupons',
	currentUserChecker,
	jwtGuard,
	(req, res, next) => {
		next();
	},
	CouponService().getCoupon
);

router.post(
	'/api/coupons',
	currentUserChecker,
	jwtGuard,
	[body('new_coupons').notEmpty().isNumeric()],
	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw new FormValidationError();
		}

		next();
	},
	CouponService().addCoupon
);

export { router as couponRouter };
