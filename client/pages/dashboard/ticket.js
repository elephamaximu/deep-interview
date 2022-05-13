import { useState } from 'react';
import DashboardLayout from '@/components/dashboard';
import Ticket from '@/components/dashboard/Ticket';

const ticket = () => {
	return <Ticket />;
};

ticket.Layout = DashboardLayout;

export default ticket;
