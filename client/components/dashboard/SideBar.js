import { FaStepForward, FaMale, FaPager, FaUnlock } from 'react-icons/fa';
import Link from 'next/link';

const SideBar = () => {
	return (
		<div
			className='fixed top-20 left-0 bottom-0 bg-gray-900 
      h-screen w-20 m-0 flex flex-col text-white shadow'
		>
			<Link href='/dashboard'>
				<a>
					<SideBarIcon icon={<FaMale size='28' />} text='내 정보' />
				</a>
			</Link>
			<Link href='/dashboard/item'>
				<a>
					<SideBarIcon icon={<FaPager size='32' />} text='인터뷰 생성' />
				</a>
			</Link>
			<Link href='/dashboard/itembox'>
				<a>
					<SideBarIcon
						icon={<FaStepForward size='22' />}
						text='AI 모의 인터뷰 실행'
					/>
				</a>
			</Link>
			<Link href='/dashboard/coupon'>
				<a>
					<SideBarIcon icon={<FaUnlock size='22' />} text='이용권 잠금 해제' />
				</a>
			</Link>
		</div>
	);
};

const SideBarIcon = ({ icon, text }) => (
	<div className='sidebar-icon group'>
		{icon}
		<span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
	</div>
);

export default SideBar;
