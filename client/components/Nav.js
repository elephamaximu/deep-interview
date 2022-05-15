import { signoutRequest } from '@/modules/auth';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Nav = () => {
	const [links, setLinks] = useState([]);
	const [nav, setNav] = useState(false);
	const { isLoggedin } = useSelector((state) => state.authReducer);

	const dispatch = useDispatch();

	useEffect(() => {
		if (isLoggedin) {
			setLinks([
				{ label: '대시보드', url: '/dashboard' },
				{ label: '로그아웃', url: '/auth/signout' },
			]);
		} else {
			setLinks([
				{
					label: '회원가입',
					url: '/auth/signup',
					btn: 'bg-transparent mb-3 px-8 py-3  mt-1 text-indigo-600',
				},
				{ label: '로그인', url: '/auth/signin', btn: 'px-8 py-3  mt-1' },
			]);
		}
	}, [isLoggedin]);

	const onClickIcon = () => setNav(!nav);

	const onClickSignout = (e) => {
		e.preventDefault();
		dispatch(signoutRequest());
	};

	const loggedInUserLink = links.map(({ label, url }) => {
		return label === '로그아웃' ? (
			<li key={url}>
				<button className='px-8 py-3' onClick={onClickSignout}>
					{label}
				</button>
			</li>
		) : (
			<li key={url}>
				<Link href={url}>
					<a>
						<button className='bg-transparent mb-0 text-indigo-600 px-8 py-3'>
							{label}
						</button>
					</a>
				</Link>
			</li>
		);
	});

	const loggedInUserLinkMobile = links.map(({ label, url }) => {
		return label === '로그아웃' ? (
			<li key={url} className='border-b-2 border-zinc-300 w-full'>
				<button
					className='border-none bg-transparent text-black'
					onClick={onClickSignout}
				>
					{label}
				</button>
			</li>
		) : (
			<li className='border-b-2 border-zinc-300 w-full' key={url}>
				<Link href={url}>
					<a>{label}</a>
				</Link>
			</li>
		);
	});

	const notLoggedInUserLinkMobile = links.map(({ label, url }) => {
		return (
			<li key={url} className='border-b-2 border-zinc-300 w-full'>
				<Link href={url}>
					<a>{label}</a>
				</Link>
			</li>
		);
	});

	const notLoggedInUserLink = links.map(({ label, url, btn }) => {
		return (
			<li key={url}>
				<Link href={url}>
					<a>
						<button className={btn}>{label}</button>
					</a>
				</Link>
			</li>
		);
	});

	return (
		<div className='w-screen h-[80px] bg-zinc-100 fixed drop-shadow-lg'>
			<div className='px-3 flex justify-between items-center w-full h-full'>
				<div className='px-3 flex justify-between items-center w-full h-full'>
					<Link href='/'>
						<a className='text-1xl font-sans font-semibold mr-6 sm:text-2xl'>
							DEEP INTERVIEW
						</a>
					</Link>
					<ul className='hidden md:flex'>
						{isLoggedin ? loggedInUserLink : notLoggedInUserLink}
					</ul>
				</div>
				<div className='md:hidden' onClick={onClickIcon}>
					{!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
				</div>
			</div>

			<ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 py-2'}>
				{isLoggedin ? loggedInUserLinkMobile : notLoggedInUserLinkMobile}
			</ul>
		</div>
	);
};

export default Nav;
