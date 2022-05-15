import DashboardLayout from '@/components/dashboard';
import Item from '@/components/dashboard/Item';
import axios from 'axios';
import { useState } from 'react';

const item = () => {
	const [key, setKey] = useState('');
	const [success_first, setSuccess_first] = useState('');
	const [error_first, setError_first] = useState('');

	const onSubmit_first = async (e) => {
		e.preventDefault();
	};
	const onSubmit_second = async (e) => {
		e.preventDefault();
	};

	return (
		<div className='w-full h-screen flex flex-col justify-between'>
			<div className='grid md:grid-cols-3 max-w-[1240px] m-auto'>
				<Item
					title='1단계 :'
					content='보유한 쿠폰 1개를 사용해서 인터뷰 합성 권한을 얻습니다.'
					button_text='쿠폰 사용'
					color='bg-indigo-200'
					onSubmitFirst={onSubmit_first}
					success_first={success_first}
				/>
				<Item
					title='2단계 :'
					content='보유한 권한으로 인터뷰 생성 신청을 합니다.'
					button_text='합성 요청'
					color='bg-green-200'
					onSubmitSecond={onSubmit_second}
				/>
			</div>
		</div>
	);
};

item.Layout = DashboardLayout;

export default item;
