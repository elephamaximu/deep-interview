const DashboardHome = () => {
	return (
		<div className='w-full h-screen flex flex-col justify-between'>
			<div className='grid md:grid-cols-4 max-w-[1240px] m-auto'>
				<div className='flex flex-col justify-center md:items-start w-full px-2 py-30 mt-30'>
					<div className='border-b-4 border-green-600 rounded-lg shadow-xl p-5 max-w-[500px] max-h-[500px] w-full h-full mx-auto bg-slate-50'>
						<div className='flex flex-row items-center'>
							<div className='flex-1 text-right md:text-center'>
								<h2 className='font-bold uppercase text-2xl text-gray-600 pl-3 pr-5 pt-8'>
									elephamaximu
								</h2>
								<p className='text-2xl mt-10'>
									@gmail.com
									<span className='text-green-500'>
										<i className='fas fa-caret-up'></i>
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-center md:items-start w-full px-2 py-30 mt-30'>
					<div className='border-b-4 border-red-600 rounded-lg shadow-xl p-5 max-w-[500px] max-h-[500px] w-full h-full mx-auto bg-slate-50'>
						<div className='flex flex-row items-center'>
							<div className='flex-1 text-right md:text-center'>
								<h2 className='font-bold uppercase text-2xl text-gray-600 pl-3 pr-5 pt-8'>
									생성한 인터뷰
								</h2>
								<p className='text-2xl mt-10'>0 개</p>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-center md:items-start w-full px-2 py-30 mt-30'>
					<div className='border-b-4 border-blue-600 rounded-lg shadow-xl p-5 max-w-[500px] max-h-[500px] w-full h-full mx-auto bg-slate-50'>
						<div className='flex flex-row items-center'>
							<div className='flex-1 text-right md:text-center'>
								<h2 className='font-bold uppercase text-2xl text-gray-600 pl-3 pr-5 pt-8'>
									보유 쿠폰
								</h2>
								<p className='text-2xl mt-10'> 0 개</p>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-center md:items-start w-full px-2 py-30 mt-30'>
					<div className='border-b-4 border-orange-600 rounded-lg shadow-xl p-5 max-w-[500px] max-h-[500px] w-full h-full mx-auto bg-slate-50'>
						<div className='flex flex-row items-center'>
							<div className='flex-1 text-right md:text-center'>
								<h2 className='font-bold uppercase text-2xl text-gray-600 pl-3 pr-5 pt-8'>
									쿠폰 신청 기회
								</h2>
								<p className='text-2xl mt-10'> 3 개</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardHome;
