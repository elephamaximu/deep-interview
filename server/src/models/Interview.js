export default function InterviewModel(mongoose) {
	const interviewSchema = mongoose.Schema(
		{
			title: { type: String, required: true },
			question: { type: String },
			videoUrl: { type: String },
			_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		},
		{ timestamps: true }
	);

	return mongoose.model('Interview', interviewSchema);
}
