import db from '../models/index.js';
import jwt from 'jsonwebtoken';

export default function AuthService() {
	const User = db.User;

	return {
		async signup(req, res) {
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

			res.status(201).send(user);
		},
		async signin(req, res) {
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

			res.status(200).send(existingUser);
		},
	};
}
