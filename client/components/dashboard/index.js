import SideBar from './SideBar';
const DashboardLayout = ({ children }) => {
	return (
		<div className='w-full h-screen flex flex-col justify-between'>
			<SideBar />
			<div>{children}</div>
		</div>
	);
};

export default DashboardLayout;
