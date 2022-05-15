const Item = ({
	title,
	content,
	button_text,
	color,
	onSubmitFirst,
	onSubmitSecond,
	success_first,
}) => {
	const inpuField = () => {
		return (
			<div>
				<div>
					<label className='block'>지원하는 회사 이름</label>
					<input
						name='company'
						className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
					/>
				</div>
				<div className='mt-2'>
					<label className='block'>연습하고 싶은 질문을 작성해 주세요.</label>
					<input
						name='question'
						className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
					/>
				</div>
			</div>
		);
	};

	return (
		<div
			className={`flex flex-col justify-center md:items-start w-full px-2 py-30 mt-30 ${color}`}
		>
			<form
				className='max-w-[500px] w-full mx-auto p-4'
				onSubmit={onSubmitFirst ? onSubmitFirst : onSubmitSecond}
			>
				<div>
					<h1 className='text-2xl'>{title}</h1>
				</div>
				<div className='mt-10'>
					<p>{content}</p>
				</div>
				{onSubmitFirst ? null : inpuField()}

				<div className='mt-4 ml-40'>
					<button
						type='submit'
						className='px-8 py-3 text-white border bg-indigo-600 border-indigo-600'
					>
						{button_text}
					</button>
					{onSubmitFirst ? success_first : null}
				</div>
			</form>
		</div>
	);
};

export default Item;

// <div className='flex flex-col justify-center md:items-start w-full px-2 py-30 mt-30 bg-green-300'>
// <form className='max-w-[500px] w-full mx-auto p-4'>
// 	<div>
// 		<h1 className='text-2xl'>3단계: </h1>
// 	</div>
// 	<div className='mt-10'></div>
// 	<div className='mt-4 ml-40'>
// 		<button
// 			type='submit'
// 			className='px-8 py-3 text-white border bg-indigo-600 border-indigo-600'
// 		>
// 			비디오 생성 완료하기
// 		</button>
// 	</div>
// </form>
// </div>

// <div
// className='flex flex-col justify-center md:items-start w-full px-2 py-30 mt-30'
// style={{ background: '#edf2f7' }}
// >
// <form className='max-w-[500px] w-full mx-auto p-4'>
// 	<div>
// 		<h1 className='text-2xl mb-2'>2단계:</h1>
// 		<label className='block'>지원하는 회사 이름</label>
// 		<input
// 			name='company'
// 			className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
// 		/>
// 	</div>
// 	<div className='mt-2'>
// 		<label className='block'>
// 			연습하고 싶은 질문을 작성해 주세요.
// 		</label>
// 		<input
// 			name='question'
// 			className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
// 		/>
// 	</div>
// 	<div className='mt-4 ml-40'>
// 		<button
// 			type='submit'
// 			className='px-8 py-3 text-white border bg-indigo-600 border-indigo-600'
// 		>
// 			작성완료
// 		</button>
// 	</div>
// </form>
// </div>
