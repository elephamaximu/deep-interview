import { signoutRequest } from '@/modules/auth';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Nav = () => {
	const [links, setLinks] = useState([]);
	const { isLoggedin } = useSelector((state) => state.authReducer);

	const dispatch = useDispatch();

	useEffect(() => {
		if (isLoggedin) {
			setLinks([
				{ label: '대시보드', url: '/apple', btn: 'btn btn-outline-danger' },
				{ label: '로그아웃', url: '/auth/signout', btn: 'btn btn-primary' },
			]);
		} else {
			setLinks([
				{ label: '회원가입', url: '/auth/signup' },
				{ label: '로그인', url: '/auth/signin' },
			]);
		}
	}, [isLoggedin]);

	const onClickSignout = (e) => {
		e.preventDefault();
		dispatch(signoutRequest());
	};

	const loggedInUserLink = links.map(({ label, url, btn }) => {
		return label === '로그아웃' ? (
			<button
				style={{ marginLeft: '5px' }}
				key={url}
				className={`nav-item ${btn}`}
				onClick={onClickSignout}
			>
				{label}
			</button>
		) : (
			<Link href={url} className='nav-item' key={url}>
				<a className={`${btn}`}>{label}</a>
			</Link>
		);
	});

	const notLoggedInUserLink = links.map(({ label, url }) => {
		return (
			<li key={url} className='nav-item'>
				<Link href={url}>
					<a className='nav-link'>{label}</a>
				</Link>
			</li>
		);
	});

	return (
		<nav className='navbar navbar-expand-lg navbar sticky-top navbar-light bg-light'>
			<div className='container-md'>
				<Link href='/'>
					<a className='navbar-brand mb-0 h1'>DEEP INTERVIEW</a>
				</Link>
				<div className='d-flex justify-content-end'>
					<ul className='nav d-flex align-items-center'>
						{isLoggedin ? loggedInUserLink : notLoggedInUserLink}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
