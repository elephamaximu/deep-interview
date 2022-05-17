const DashCard = ({ title, content }) => {
	return (
		<div className='flex flex-col justify-center md:items-start w-full px-2 py-30 mt-30'>
			<div className='border-b-4 border-indigo-600 rounded-lg shadow-xl p-5 max-w-[500px] max-h-[500px] w-full h-full mx-auto bg-slate-50'>
				<div className='flex flex-row items-center'>
					<div className='flex-1 text-right md:text-center'>
						<h2 className='font-bold uppercase text-2xl text-gray-600 pl-3 pr-5 pt-8'>
							{title}
						</h2>
						<p className='text-2xl mt-10'>
							{content}
							<span className='text-green-500'>
								<i className='fas fa-caret-up'></i>
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashCard;
