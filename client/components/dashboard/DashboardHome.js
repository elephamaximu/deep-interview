import DashCard from './DashCard';
import Router from 'next/router';
import { useEffect } from 'react';

const DashboardHome = ({ currentUser, detailed_user }) => {
	const email = currentUser.email;
	const splitedEmail = email.split('@');

	const { coupons, applies } = detailed_user.existingUser;
	const existingInterview = detailed_user.existingInterview;
	useEffect(() => {
		if (!currentUser) {
			Router.push('auth/signin');
		}
	}, [currentUser]);

	return (
		<div className='w-full mt-80 justify-center'>
			<div className='grid md:grid-cols-4 max-w-[1240px] m-auto'>
				<DashCard title={splitedEmail[0]} content={splitedEmail[1]} />
				<DashCard
					title='생성한 인터뷰'
					content={`${existingInterview.length} 개`}
				/>
				<DashCard title='보유 쿠폰' content={`${coupons} 개`} />
				<DashCard title='쿠폰 신청 회수' content={`${applies} 번`} />
			</div>
		</div>
	);
};

export default DashboardHome;
