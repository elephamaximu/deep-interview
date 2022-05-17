import ItemCard from '@/components/dashboard/interviews/ItemCard';
import Router from 'next/router';
import { useEffect } from 'react';

const Item = ({
	currentUser,
	onSubmitFirst,
	onSubmitSecond,
	onSubmitThird,
	successFirst,
	successSecond,
	successThird,
	errorFirst,
	errorSecond,
	errorThird,
	onChange,
}) => {
	useEffect(() => {
		if (!currentUser) {
			Router.push('/auth/signin');
		}
	}, [currentUser]);

	return (
		<div className='w-full h-screen flex flex-col justify-between'>
			<div className='grid md:grid-cols-3 max-w-[1240px] m-auto'>
				<ItemCard
					title='1단계 :'
					content='보유한 쿠폰 1개를 사용해서 인터뷰 합성 권한을 얻습니다.'
					button_text='쿠폰 사용'
					color='bg-blue-50'
					onSubmit={onSubmitFirst}
					success={successFirst}
					error={errorFirst}
					onChange={onChange}
				/>
				<ItemCard
					title='2단계 :'
					content='보유한 권한으로 인터뷰 비디오 합성 신청을 합니다.'
					button_text='합성 요청'
					color='bg-blue-100'
					onSubmit={onSubmitSecond}
					success={successSecond}
					error={errorSecond}
				/>
				<ItemCard
					title='3단계 :'
					content='인터뷰 비디오를 시청 요청합니다. 비디오가 생성되면 인터뷰 시청으로 이동됩니다.'
					button_text='비디오 요청'
					color='bg-violet-100'
					onSubmit={onSubmitThird}
					success={successThird}
					error={errorThird}
				/>
			</div>
		</div>
	);
};

export default Item;
