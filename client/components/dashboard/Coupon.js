import Router from 'next/router';
import { useEffect } from 'react';

const Coupon = ({ currentUser, onSubmit, defaultCount, success, error }) => {
	useEffect(() => {
		if (!currentUser) {
			Router.push('/auth/signin');
		}
	}, [currentUser]);

	const showError = () => {
		return error ? (
			<div
				className='p-4 mt-2 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
				role='alert'
			>
				{error}
			</div>
		) : null;
	};

	const showSuccess = () => {
		return success ? (
			<div
				className='p-4 mt-2 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800'
				role='alert'
			>
				{success}
			</div>
		) : null;
	};

	return (
		<div className='h-screen overflow-hidden flex items-center justify-center'>
			<div className='px-10 py-10 mt-4 text-left bg-white shadow-lg bol rounded-lg w-1/4'>
				<form
					onSubmit={onSubmit}
					className='max-w-[500px] w-full mx-auto bg-white p-4'
				>
					<div className='mt-4'>
						<label className='block'>쿠폰 발행하기</label>
						<input
							value={defaultCount}
							readOnly
							className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
						/>
					</div>
					<div className='flex items-baseline justify-between mt-4'>
						<button
							type='submit'
							className='px-8 py-3 text-white border bg-indigo-600 border-indigo-600'
						>
							발행
						</button>
					</div>
					{showError()}
					{showSuccess()}
				</form>
			</div>
		</div>
	);
};

export default Coupon;
