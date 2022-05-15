import db from '../models/index.js';

export default function CouponService() {
	const User = db.User;

	return {
		async getCoupon(req, res) {
			const { id } = req.currentUser;

			const existingUser = await User.findOne({ _id: id });

			if (!existingUser) {
				throw new Error('존재하지 않는 계정입니다.');
			}

			res
				.status(200)
				.send({ coupons: existingUser.coupons, applies: existingUser.applies });
		},
		async addCoupon(req, res) {
			const { id } = req.currentUser;
			const { new_coupons } = req.body;

			const existingUser = await User.findOne({ _id: id });

			if (!existingUser) {
				throw new Error('존재하지 않는 계정입니다.');
			}

			if (existingUser.applies > 2) {
				throw new Error('쿠폰 발급은 3회 까지만 가능합니다.');
			}

			existingUser.coupons += new_coupons;
			existingUser.applies += 1;

			await existingUser.save();

			res.status(200).send(existingUser);
		},
	};
}
