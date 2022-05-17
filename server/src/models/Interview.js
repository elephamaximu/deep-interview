import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export default function InterviewModel(mongoose) {
	const interviewSchema = mongoose.Schema(
		{
			title: { type: String, required: true },
			question: { type: String },
			videoUrl: { type: String, default: '' },
			key: { type: String },
			videoKey: { type: String, default: '' },
			_user: { type: Schema.Types.ObjectId, ref: 'User' },
		},
		{
			timestamps: true,
			toJSON: {
				transform(_doc, ret) {
					delete ret.key;
					delete ret.videoKey;
					delete ret.createdAt;
					delete ret.updatedAt;
					delete ret.__v;
					ret.id = ret._id;
					delete ret._id;
				},
			},
		}
	);

	return mongoose.model('Interview', interviewSchema);
}
