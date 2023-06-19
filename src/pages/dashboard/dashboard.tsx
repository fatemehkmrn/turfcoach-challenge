import React from 'react';
import { Container } from '@mui/material';
import Weather from '../../components/weather/weather';
import Activities from '../../components/activities/activities';

const Dashboard = (): JSX.Element => {
	return (
		<Container>
			<Activities />
			<Weather />
		</Container>
	);
};

export default Dashboard;
