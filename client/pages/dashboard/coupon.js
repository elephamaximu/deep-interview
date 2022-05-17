import DashboardLayout from '@/components/dashboard';
import Coupon from '@/components/dashboard/Coupon';
import axios from 'axios';
import { useState } from 'react';

const coupon = ({ currentUser }) => {
	const default_count = 1;

	const [success, setSuccess] = useState('');
	const [error, setError] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			setError('');
			setSuccess('');
			const result = await axios.post('/api/coupons', {
				new_coupons: default_count,
			});
			setSuccess(`성공 : 현재 보유 쿠폰은 ${result.data.coupons}개 입니다.`);
		} catch (err) {
			setError(err.response.data.message);
		}
	};

	return (
		<Coupon
			onSubmit={onSubmit}
			defaultCount={default_count}
			success={success}
			error={error}
			currentUser={currentUser}
		/>
	);
};

coupon.Layout = DashboardLayout;

export default coupon;
