import { useState } from 'react';
import DashboardLayout from '@/components/dashboard';
import Item from '@/components/dashboard/Item';

const item = () => {
	return <Item />;
};

item.Layout = DashboardLayout;

export default item;
