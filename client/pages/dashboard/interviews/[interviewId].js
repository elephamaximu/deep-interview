import ReactPlayer from 'react-player';
import NextLink from 'next/link';

const interviewDetail = ({ interview_list, single_interview }) => {
	const playList = interview_list.map((interview) => {
		return (
			<ul className='text-white' key={interview.id}>
				<li>
					<NextLink
						href='/dashboard/interviews/[interviewId]'
						as={`/dashboard/interviews/${interview.id}`}
					>
						<a className='inline-flex items-center font-medium text-3xl pl-7 py-3 transition w-ful'>
							{interview.title}
						</a>
					</NextLink>
				</li>
			</ul>
		);
	});
	return (
		<div>
			<div className='w-full h-screen flex flex-col justify-start md:flex-grow max-w[1240px] mt-30 ml-30'>
				<div className='bg-indigo-600 top-20 fixed inset-y-0 py-4 right-0 w-64'>
					{playList}
				</div>
				<div>
					{single_interview.videoUrl ? (
						<ReactPlayer
							className='mt-20 ml-20'
							controls={true}
							url={single_interview.videoUrl}
							width='1100px'
							height='800px'
							pip={true}
						/>
					) : (
						<div className='mt-28 ml-20 text-3xl'>
							비디오가 합성중입니다. 잠시 후 다시 방문하거나 새로고침해주세요.
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

interviewDetail.getInitialProps = async (context, client, currentUser) => {
	const { interviewId } = context.query;

	const detail_response = await client.get('/api/auth/user');
	const { existingInterview } = detail_response.data;

	const response = await client.get(`/api/interviews/${interviewId}`);

	const { question, _user, videoUrl, id } = response.data;

	if (!videoUrl) {
		try {
			const result = await client.post(`/api/interviews/video`, {
				interview_id: interviewId,
			});
			const { videoUrl } = result.data;
			return {
				single_interview: {
					question: question,
					_user: _user,
					videoUrl: videoUrl,
					id: id,
				},
				interview_list: existingInterview,
			};
		} catch (err) {
			console.log(err);
		}
	}

	return {
		single_interview: {
			question,
			_user,
			videoUrl,
			id,
		},
		interview_list: existingInterview,
	};
};

export default interviewDetail;
