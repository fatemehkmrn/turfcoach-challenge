import { ChangeEventHandler } from 'react';

export interface IViewBoxProps {
	title: string;
	value: string;
	suffix: string;
}

export interface IPrecipitationBoxProps {
	time: number;
	percent: string;
}

export interface IWeatherResponse {
	current_weather: {
		is_day: 1 | 0;
		weathercode: number;
		temperature: string;
		windspeed: string;
	};
	hourly: { precipitation_probability: string[] };
}

export interface IDataGridActivity {
	type: string;
	time: string;
	assignee: string;
	pitch: string;
	date: Date;
	id: number;
}

export type IActivity = Omit<IDataGridActivity, 'id'>;

export interface IState {
	isModalOpen: boolean;
	counter: number;
	list: IDataGridActivity[];
	selectedRow: IDataGridActivity | null;
}

export interface IAction {
	type: string;
	open: boolean;
	id: number;
	activity: IActivity;
}

export interface ISelectProps {
	onChange: ChangeEventHandler<HTMLSelectElement>;
	name: string;
	label: string;
	options: string[];
}

export interface IActivityModalProps {
	isOpen: boolean;
	handleClose: () => void;
	handleActivitySubmit: (activity: IActivity) => void;
}

export interface IActionIconProps {
	index: number;
	actionType: string;
}
