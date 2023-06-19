export const fetchWeather = (lat: string, lon: string): string => {
	return `/forecast?latitude=${lat}&longitude=${lon}&hourly=precipitation_probability&current_weather=true&forecast_days=1`;
};
