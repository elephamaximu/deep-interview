import buildApi from '@/api';
import Home from '@/components/Home';

const HomePage = () => {
	return (
		<div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
			<Home />
		</div>
	);
};

HomePage.getInitialProps = async (context) => {
	const client = buildApi(context);

	const { data } = await client.get('/api/auth/currentuser');

	return data;
};

export default HomePage;
