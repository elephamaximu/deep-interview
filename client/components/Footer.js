import Link from 'next/link';

const Footer = ({ currentUser }) => {
	const callToAction = () => {
		return (
			<p className='d-flex justify-content-center align-items-center'>
				<span className='me-3'>Register for free</span>
				<Link href='/auth/signup'>
					<a type='button' className='btn btn-outline-light btn-rounded'>
						Sign up!
					</a>
				</Link>
			</p>
		);
	};

	const copyright = () => {
		return (
			<p className='d-flex justify-content-center align-items-center'>
				<span className='me-3'>
					Copyright{' '}
					<a href='https://www.deepbrainai.io/ko/' style={{ color: 'white' }}>
						딥브레인AI
					</a>
				</span>
			</p>
		);
	};

	return (
		<footer
			className='text-center text-white fixed-bottom'
			style={{ backgroundColor: '#B33BFD' }}
		>
			<div className='container p-4 pb-0'>
				<section>{currentUser ? copyright() : callToAction()}</section>
			</div>
		</footer>
	);
};

export default Footer;
