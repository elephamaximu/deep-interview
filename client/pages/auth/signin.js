import AuthForm from '@/components/auth';
import { signinRequest } from '@/modules/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

const signin = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const dispatch = useDispatch();

	const { isLoggedin, signinError } = useSelector((state) => state.authReducer);

	useEffect(() => {
		if (isLoggedin) {
			Router.push('/');
		}
	}, [isLoggedin]);

	const onChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(signinRequest(user));
	};

	const contents = {
		head: '로그인',
		button: 'Sign In',
	};

	return (
		<div className='container mt-5 mb-5"'>
			<AuthForm
				onChange={onChange}
				onSubmit={onSubmit}
				error={signinError}
				contents={contents}
			/>
		</div>
	);
};

export default signin;
