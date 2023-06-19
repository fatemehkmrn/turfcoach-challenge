import React from 'react';
import { Container } from '@mui/material';
import Weather from '../../components/weather/weather';

const Dashboard = (): JSX.Element => {
	return (
		<Container>
			<Weather />
		</Container>
	);
};

export default Dashboard;
