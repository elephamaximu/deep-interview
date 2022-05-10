import AuthForm from '@/components/auth';
import Router from 'next/router';
import useRequest from '@/hooks/use-request';
import { useState } from 'react';

const signin = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [makeRequest, error] = useRequest({
		url: '/api/auth/signin',
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
		head: '로그인',
		button: 'Sign In',
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

export default signin;
