const ItemCard = ({
	title,
	content,
	button_text,
	color,
	onSubmit,
	success,
	error,
	onChange,
}) => {
	const showError = () => {
		return error ? (
			<div
				className='p-4 mt-2 mb-4 w-full text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
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

	const inputField = () => {
		return (
			<div className='mt-3'>
				<div>
					<label className='block'>지원하는 회사 이름</label>
					<input
						name='title'
						onChange={onChange}
						className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
					/>
				</div>
				<div className='mt-2'>
					<label className='block'>연습하고 싶은 질문을 작성해 주세요.</label>
					<input
						name='question'
						onChange={onChange}
						className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
					/>
				</div>
			</div>
		);
	};

	return (
		<form onSubmit={onSubmit}>
			<fieldset
				disabled={success ? 'disabled' : ''}
				className={`flex flex-col justify-evenly min-w-full min-h-full md:items-start w-full px-2 mt-30 ${color}`}
			>
				<div>
					<div className='m-3'>
						<h1 className='text-2xl ml-8'>{title}</h1>
					</div>

					<div className='grow'>
						<p>{content}</p>
					</div>
					<div className='m-3 mb-4 min-w-[350px]'>
						{onChange ? inputField() : null}
					</div>
					<div className='mb-4 flex flex-row-reverse min-w-full'>
						<div>
							<button
								type='submit'
								className={
									success
										? 'px-8 py-3 text-zinc-800 bg-zinc-500 border border-zinc-500 hover:bg-zinc-500 hover:text-zinc-800'
										: 'px-8 py-3 text-white border bg-indigo-600 border-indigo-600'
								}
							>
								{button_text}
							</button>
						</div>
					</div>
					<div className='min-w-full'>
						{success ? showSuccess() : ''}
						{error ? showError() : ''}
					</div>
				</div>
			</fieldset>
		</form>
	);
};

export default ItemCard;
