import DashboardLayout from '@/components/dashboard';
import DashboardHome from '@/components/dashboard/DashboardHome';

const dashboard = ({ currentUser, detailed_user }) => {
	return (
		<DashboardHome currentUser={currentUser} detailed_user={detailed_user} />
	);
};

dashboard.Layout = DashboardLayout;

dashboard.getInitialProps = async (context, client, currentUser) => {
	const { data } = await client.get('/api/auth/user');

	return { detailed_user: data };
};

export default dashboard;
