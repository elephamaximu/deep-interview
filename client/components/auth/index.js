const AuthForm = ({ onChange, onSubmit, error, contents }) => {
	const showError = () => {
		return error ? (
			<div
				className='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
				role='alert'
			>
				{error}
			</div>
		) : null;
	};

	return (
		<div className='px-10 py-10 mt-4 text-left bg-white shadow-lg bol rounded-lg w-1/4'>
			<h2 className='text-2xl font-bold text-center'>{contents.head}</h2>
			<form
				onSubmit={onSubmit}
				className='max-w-[500px] w-full mx-auto bg-white p-4'
			>
				<div className='mt-4'>
					<label className='block'>이메일</label>
					<input
						name='email'
						onChange={onChange}
						className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
					/>
				</div>
				<div className='mt-4'>
					<label className='block'>패스워드</label>
					<input
						type='password'
						name='password'
						onChange={onChange}
						className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
					/>
				</div>
				<div className='flex items-baseline justify-between mt-4'>
					{showError()}

					<button
						type='submit'
						className='px-8 py-3 text-white border bg-indigo-600 border-indigo-600'
					>
						{contents.button}
					</button>
				</div>
			</form>
		</div>
	);
};

export default AuthForm;
