import db from '../models/index.js';
import axios from 'axios';

export default function InterviewService() {
	const Interview = db.Interview;
	const User = db.User;

	return {
		async getInterview(req, res) {
			const { email, password } = req.body;

			const existingUser = await User.findOne({ email });

			if (existingUser) {
				throw new Error('이미 사용중인 이메일입니다.');
			}

			const user = new User({ email, password });
			await user.save();

			res.status(200).send(user);
		},
		async getModelKey(req, res) {
			const { title, question } = req.body;

			const { id } = req.currentUser;

			const existingUser = await User.findOne({ _id: id });

			try {
				const response = await axios.get(
					`${process.env.STUDIOS_BASE_URL}/generateClientToken?appId=${process.env.APP_ID}&userKey=${process.env.UUID}`
				);
				const token = response.data.token;

				const key_response = await axios.post(
					`${process.env.STUDIOS_BASE_URL}/generateToken`,
					{
						appId: process.env.APP_ID,
						clientHostname: process.env.CLIENT_HOST_NAME,
						isClientToken: true,
						platform: 'web',
						sdk_v: '1.0',
						token: token,
						uuid: process.env.UUID,
					}
				);

				const key = key_response.data.token;

				const interveiw = new Interview({
					title,
					question,
					key,
					_user: existingUser.id,
				});

				await interveiw.save();

				existingUser.coupons -= 1;
				await existingUser.save();

				res.status(200).send(interveiw);
			} catch (err) {
				console.log(err);
			}
		},
		async createInterview(req, res) {
			const _user = req.currentUser.id;
			const _id = req.body.interview_id;

			const existingInterview = await Interview.findOne({
				_id,
				_user,
			});

			try {
				const result = await axios.post(
					`${process.env.STUDIOS_BASE_URL}/makeVideo`,
					{
						appId: process.env.APP_ID,
						platform: 'web',
						isClientToken: true,
						clientHostname: process.env.CLIENT_HOST_NAME,
						sdk_v: '1.0',
						language: 'ko',
						model: 'ysy',
						token: `${existingInterview.key}`,
						uuid: process.env.UUID,
						text: `${existingInterview.question}`,
					}
				);
				const video_key = result.data.data.key;

				existingInterview.videoKey = video_key;
				await existingInterview.save();

				res.status(200).send(existingInterview);
			} catch (err) {
				console.log(err);
			}
		},

		async findVideo(req, res) {
			const _user = req.currentUser.id;
			const _id = req.body.interview_id;

			const existingInterview = await Interview.findOne({
				_id,
				_user,
			});
			try {
				const result = await axios.post(
					`${process.env.STUDIOS_BASE_URL}/findProject`,
					{
						appId: process.env.APP_ID,
						clientHostname: process.env.CLIENT_HOST_NAME,
						isClientToken: true,
						platform: 'web',
						sdk_v: '1.0',
						token: `${existingInterview.key}`,
						uuid: process.env.UUID,
						key: `${existingInterview.videoKey}`,
					}
				);
				const { success, data } = result;
				console.log(data);
				const videoUrl = data.video;

				existingInterview.videoUrl = videoUrl;
				await existingInterview.save();
				res.send(existingInterview);
			} catch (err) {
				console.log(err);
			}
		},
	};
}
