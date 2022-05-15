import ReactPlayer from 'react-player';

const ItemBox = () => {
	return (
		<div>
			<div className='pt-20'>
				<ReactPlayer
					url='https://ai-platform-public.s3.ap-northeast-2.amazonaws.com/ysy_1_048c2247e130e6018767f97a9879948e.mp4'
					controls={true}
					width='1100px'
					height='800px'
					pip={true}
				/>
			</div>
			<div
				className='fixed top-20 right-0 bottom-0 bg-gray-900 
				h-screen w-60 m-0 flex flex-col text-white shadow'
			>
				<ul className='absolute bg-gray-800 w-full px-8 py-3'>
					<li className=' w-full text-2xl mb-10'>내 인터뷰 목록</li>
					<li className='border-b-2 border-zinc-300 w-full text-1xl mb-1'>
						삼성
					</li>
					<li className='border-b-2 border-zinc-300 w-full text-1xl mb-1'>
						카카오
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ItemBox;
