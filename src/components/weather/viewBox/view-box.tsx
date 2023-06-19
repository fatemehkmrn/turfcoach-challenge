import React from 'react';
import { IViewBoxProps } from '../../../types/types';
import s from './view-box.module.css';

const ViewBox = ({ title, value, suffix }: IViewBoxProps) => {
	return (
		<div className={s.container}>
			<div className={s.title}>{title}</div>
			<div>
				<span className={s.value}>{value}</span>
				<span>{suffix}</span>
			</div>
		</div>
	);
};

export default ViewBox;
