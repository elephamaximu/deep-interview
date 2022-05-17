import db from '../models/index.js';
import axios from 'axios';

export default function InterviewService() {
	const Interview = db.Interview;
	const User = db.User;

	return {
		async getInterviewList(req) {
			const _user = req.currentUser.id;

			const existingInterview = await Interview.find({
				_user,
			});

			return existingInterview;
		},
		async getSingleInterview(req) {
			const _user = req.currentUser.id;
			const _id = req.params.id;

			const existingInterview = await Interview.findOne({
				_user,
				_id,
			});

			return existingInterview;
		},
		async getModelKey(req) {
			const { title, question } = req.body;
			const _user = req.currentUser.id;

			const existingUser = await User.findOne({ _id: _user });

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

				return interveiw;
			} catch (err) {
				throw new Error('에러가 발생하였습니다. 잠시 후 다시 실행해 주세요.');
			}
		},
		async createInterview(req) {
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
						clothes: '2',
						token: `${existingInterview.key}`,
						uuid: process.env.UUID,
						text: `${existingInterview.question}`,
					}
				);
				const video_key = result.data.data.key;

				existingInterview.videoKey = video_key;
				await existingInterview.save();

				return existingInterview;
			} catch (err) {
				throw new Error(
					'합성이 이루어지지 않았습니다. 잠시 후 다시 요청하세요'
				);
			}
		},

		async findVideo(req) {
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

				const data = result.data.data;
				existingInterview.videoUrl = data.video;
				await existingInterview.save();

				return existingInterview;
			} catch (err) {
				throw new Error('합성이 완성되지 않았습니다. 잠시 후 다시 요청하세요');
			}
		},
	};
}
