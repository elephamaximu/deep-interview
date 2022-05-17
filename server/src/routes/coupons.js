import express from 'express';
import { currentUserChecker } from '../middlewares/currentuser-checker.js';
import CouponService from '../services/coupon.js';
import { jwtGuard } from '../middlewares/jwt-guard.js';

const router = express.Router();
const couponService = CouponService();

router.post('/api/coupons', currentUserChecker, jwtGuard, async (req, res) => {
	const user = await couponService.addCoupon(req);
	res.status(201).send(user);
});

export { router as couponRouter };
