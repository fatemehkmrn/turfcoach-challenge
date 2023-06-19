import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { IPrecipitationBoxProps } from '../../../types/types';
import s from './precipitation-box.module.css';

const PrecipitationBox = ({ time, percent }: IPrecipitationBoxProps) => {
	return (
		<div className={s.container}>
			<div className={s.time}>
				<AccessTimeIcon /> {time}
			</div>
			<div>{percent}%</div>
		</div>
	);
};

export default PrecipitationBox;
