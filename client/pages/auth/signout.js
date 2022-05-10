import { useEffect } from 'react';
import Router from 'next/router';
import useRequest from '@/hooks/use-request';

const signout = () => {
	const [makeRequest, _error] = useRequest({
		url: '/api/auth/signout',
		method: 'post',
		body: {},
		onSuccess: () => Router.push('/'),
	});

	useEffect(() => {
		makeRequest();
	}, []);

	return (
		<div class='d-flex justify-content-center'>
			<div class='spinner-border' role='status'>
				<br />
				<span class='visually-hidden'>Loading...</span>
			</div>
		</div>
	);
};

export default signout;
