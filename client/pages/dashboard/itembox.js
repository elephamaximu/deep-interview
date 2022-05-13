import { useState } from 'react';
import DashboardLayout from '@/components/dashboard';
import ItemBox from '@/components/dashboard/ItemBox';

const itembox = () => {
	return <ItemBox />;
};

itembox.Layout = DashboardLayout;

export default itembox;
