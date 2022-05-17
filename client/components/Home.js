import Image from 'next/image';
import heroImage from '../public/laptop-and-talking-on-the-phone-min.png';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Home = () => {
	const { isLoggedin } = useSelector((state) => state.authReducer);

	const callToAction = () => {
		return (
			<Link href='/auth/signup'>
				<button className='py-3 px-5 sm:w-[60%] my-4'>지금 시작하기</button>
			</Link>
		);
	};

	const goToDashboard = () => {
		return (
			<Link href='/dashboard'>
				<button className='py-3 px-5 sm:w-[60%] my-4'>대시보드</button>
			</Link>
		);
	};

	return (
		<div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
			<div className='flex flex-col justify-center md:items-start w-full px-2 py-30 mt-30'>
				<p className='text-2xl'>AI Studios의 가상인간을 만나보세요</p>
				<h1 className='py-3 text-5xl md:text-7xl font-bold'>
					AI로 시작하는 면접
				</h1>
				{isLoggedin ? goToDashboard() : callToAction()}
			</div>
			<div>
				<Image priority={true} src={heroImage} />
			</div>
		</div>
	);
};

export default Home;
