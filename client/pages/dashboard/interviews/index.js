import NextLink from 'next/link';

const interviewList = ({ interview_list }) => {
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
			<div className='bg-indigo-600 top-20 fixed inset-y-0 py-4 right-0 w-64'>
				{playList}
			</div>
			<div className='w-full h-screen flex flex-col justify-start md:flex-grow max-w[1240px] mt-30 ml-30'>
				<h1 className='text-3xl mt-40 ml-40'>
					생성된 인터뷰가 {interview_list.length}개 있습니다.
				</h1>
			</div>
		</div>
	);
};

interviewList.getInitialProps = async (context, client, currentUser) => {
	const response = await client.get('/api/auth/user');
	const { existingInterview } = response.data;

	return { interview_list: existingInterview };
};

export default interviewList;
