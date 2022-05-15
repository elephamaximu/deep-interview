import DashboardLayout from '@/components/dashboard';
import ItemBox from '@/components/dashboard/ItemBox';

const itembox = () => {
	return (
		<div className='grid max-w-[1240px] m-auto'>
			<div className='flex flex-col justify-center md:items-start w-full px-2 py-30 mt-30'>
				<ItemBox />
			</div>
		</div>
	);
};

itembox.Layout = DashboardLayout;

export default itembox;
