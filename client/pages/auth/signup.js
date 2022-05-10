import AuthForm from '@/components/auth';
import Router from 'next/router';
import useRequest from '@/hooks/use-request';
import { useState } from 'react';

const signup = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [makeRequest, error] = useRequest({
		url: '/api/auth/signup',
		method: 'post',
		body: user,
		onSuccess: () => Router.push('/'),
	});

	const onChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		await makeRequest();
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
				error={error}
				contents={contents}
			/>
		</div>
	);
};

export default signup;
