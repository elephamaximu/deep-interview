import db from '../models/index.js';
import jwt from 'jsonwebtoken';

export default function AuthService() {
	const User = db.User;

	return {
		async signup(req) {
			const { email, password } = req.body;

			const existingUser = await User.findOne({ email });

			if (existingUser) {
				throw new Error('이미 사용중인 이메일입니다.');
			}

			const user = new User({ email, password });
			await user.save();

			const userJwt = jwt.sign(
				{
					id: user.id,
					email: user.email,
				},
				process.env.JWT_SECRET
			);

			req.session = { jwt: userJwt };

			return user;
		},
		async signin(req) {
			const { email, password } = req.body;

			const existingUser = await User.findOne({ email });

			if (!existingUser) {
				throw new Error('계정이 존재하지 않습니다.');
			}

			const passwordMatch = await existingUser.comparePassword(password);

			if (!passwordMatch) {
				throw new Error('아이디 혹은 비밀번호가 정확하지 않습니다.');
			}

			const userJwt = jwt.sign(
				{
					id: existingUser.id,
					email: existingUser.email,
				},
				process.env.JWT_SECRET
			);

			req.session = { jwt: userJwt };

			return existingUser;
		},

		async findUser(req) {
			const simpleUser = req.currentUser;

			const existingUser = await User.findOne({ email: simpleUser.email });

			if (!existingUser) {
				throw new Error('계정이 존재하지 않습니다.');
			}
			return existingUser;
		},
	};
}
