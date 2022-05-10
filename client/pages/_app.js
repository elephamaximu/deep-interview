import buildApi from '@/api';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import 'bootstrap/dist/css/bootstrap.css';

const AppComponent = ({ Component, pageProps, currentUser }) => {
	return (
		<div>
			<Header />
			<Nav currentUser={currentUser} />
			<Component {...pageProps} />
			<Footer currentUser={currentUser} />
		</div>
	);
};

AppComponent.getInitialProps = async (context) => {
	const client = buildApi(context.ctx);

	const { data } = await client.get('/api/auth/currentuser');

	let pageProps = {};
	if (context.Component.getInitialProps) {
		pageProps = await context.Component.getInitialProps(context.ctx);
	}
	return { pageProps, ...data };
};

export default AppComponent;
