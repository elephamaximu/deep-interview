import buildApi from '@/api';
import Home from '@/components/Home';

const HomePage = ({ currentUser }) => {
	return (
		<div className='container'>
			<Home currentUser={currentUser} />
		</div>
	);
};

HomePage.getInitialProps = async (context) => {
	const client = buildApi(context);

	const { data } = await client.get('/api/auth/currentuser');

	return data;
};

export default HomePage;
