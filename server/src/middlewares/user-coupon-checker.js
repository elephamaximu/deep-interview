import db from '../models/index.js';

export const userCouponChecker = async (req, res, next) => {
	const User = db.User;

	const { id } = req.currentUser;

	const existingUser = await User.findOne({ _id: id });

	if (existingUser.coupons < 1) {
		throw new Error('사용가능한 쿠폰이 없습니다.');
	}
	next();
};
