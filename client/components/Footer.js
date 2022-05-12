import Link from 'next/link';
import { useSelector } from 'react-redux';

const Footer = () => {
	const { isLoggedin } = useSelector((state) => state.authReducer);

	const callToAction = () => {
		return (
			<p className='d-flex justify-content-center p-3 pb-0 align-items-center'>
				<span className='me-3'>Register for free</span>
				<Link href='/auth/signup'>
					<a type='button' className='btn btn-outline-light btn-rounded'>
						Sign up!
					</a>
				</Link>
			</p>
		);
	};

	const goToDashboard = () => {
		return (
			<p className='d-flex justify-content-center p-3 pb-0 align-items-center'>
				<span className='me-3'>이제 서비스를 이용해보세요.</span>
				<Link href='/apple'>
					<a type='button' className='btn btn-outline-light btn-rounded'>
						Dashboard
					</a>
				</Link>
			</p>
		);
	};

	const copyright = () => {
		return (
			<div className='row'>
				<div className='col-sm-4'>
					© 2022 Copyright
					<a href='https://www.deepbrainai.io/ko/' style={{ color: 'white' }}>
						<span style={{ marginLeft: '10px' }}> (주)딥브레인에이아이 </span>
					</a>
				</div>
				<div className='col-sm-4'>
					© 2022 Copyright
					<a href='https://aistudios.com/' style={{ color: 'white' }}>
						<span style={{ marginLeft: '10px' }}>딥브레인 AI Studios</span>
					</a>
				</div>
				<div className='col-sm-4'>
					© 2022 Copyright for image
					<a href='https://icons8.com' style={{ color: 'white' }}>
						<span style={{ marginLeft: '10px' }}>icons8.com</span>
					</a>
				</div>
			</div>
		);
	};

	return (
		<footer
			className='text-center text-white fixed-bottom'
			style={{ backgroundColor: '#B33BFD' }}
		>
			<div className='container p-0 pb-3'>
				{isLoggedin ? goToDashboard() : callToAction()}
				<hr />
				<section>{copyright()}</section>
			</div>
		</footer>
	);
};

export default Footer;
