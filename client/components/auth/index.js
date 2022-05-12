const AuthForm = ({ onChange, onSubmit, error, contents }) => {
	const showError = () => {
		return error ? <div className='alert alert-danger'>{error}</div> : null;
	};

	return (
		<div className='row d-flex align-items-center justify-content-center'>
			<div className='col-md-6'>
				<div className='card px-5 py-5'>
					<form onSubmit={onSubmit}>
						<br />
						<h2>{contents.head}</h2>
						<br />
						<div className='mb-3'>
							<label className='form-label'>이메일</label>
							<input
								className='form-control'
								name='email'
								onChange={onChange}
							/>
						</div>
						<div className='mb-3'>
							<label className='form-label'>패스워드</label>
							<input
								className='form-control'
								type='password'
								name='password'
								onChange={onChange}
							/>
						</div>
						{showError()}
						<button className='btn btn-primary' type='submit'>
							{contents.button}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;
