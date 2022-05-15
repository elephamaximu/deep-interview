const Footer = () => {
	return (
		<footer className='bg-zinc-100 fixed inset-x-0 bottom-0 '>
			<div className='w-full text-zinc-800 py-y px-2'>
				<div className='grid md:grid-cols-4 border-b-2 border-gray-600 py-5'>
					<div className='ml-4'></div>
					<div>
						<a href='https://www.deepbrainai.io/ko/'>
							@COPYRIGHT (주)딥브레인에이아이
						</a>
					</div>
					<div>
						<a href='https://aistudios.com/'>@COPYRIGHT 딥브레인 AI Studios</a>
					</div>

					<div>
						<a href='https://icons8.com'> @COPYRIGHT icons8.com</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
