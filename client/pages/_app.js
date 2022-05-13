import 'bootstrap/dist/css/bootstrap.css';
import buildApi from '@/api';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import { wrapper } from '@/modules/store';
import withReduxSaga from 'next-redux-saga';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserRequest } from '@/modules/auth';

const AppComponent = ({ Component, pageProps, currentUser }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(currentUserRequest(currentUser));
	}, []);

	const EmptyLayout = ({ children }) => <>{children}</>;
	const NestedLayout = Component.Layout || EmptyLayout;

	return (
		<div>
			<Header />
			<Nav />
			<NestedLayout>
				<Component {...pageProps} />
			</NestedLayout>
			<Footer />
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

export default wrapper.withRedux(withReduxSaga(AppComponent));
