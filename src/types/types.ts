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
