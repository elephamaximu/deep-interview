import AuthForm from '@/components/auth';
import { signupRequest } from '@/modules/auth';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const signup = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const dispatch = useDispatch();

	const { signupError } = useSelector((state) => state.authReducer);

	const onChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(signupRequest(user));
	};

	const contents = {
		head: '회원가입',
		button: 'Sign Up',
	};

	return (
		<div className='container mt-5 mb-5"'>
			<AuthForm
				onChange={onChange}
				onSubmit={onSubmit}
				error={signupError}
				contents={contents}
			/>
		</div>
	);
};

export default signup;
