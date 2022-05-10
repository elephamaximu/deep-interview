import Link from 'next/link';

const Nav = ({ currentUser }) => {
	const links = [
		!currentUser && { label: '회원가입', href: '/auth/signup' },
		!currentUser && { label: '로그인', href: '/auth/signin' },
		currentUser && { label: '로그아웃', href: '/auth/signout' },
	]
		.filter((link) => link)
		.map(({ label, href }) => {
			return (
				<li key={href} className='nav-item'>
					<Link href={href}>
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
					<ul className='nav d-flex align-items-center'>{links}</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
