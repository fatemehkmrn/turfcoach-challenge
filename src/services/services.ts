import { type AxiosResponse } from 'axios';
import { request } from '../utilities/request';
import { fetchWeather } from '../constants/api-calls';

export const handleFetchWeatherStatus = async (lat: string, lon: string): Promise<AxiosResponse> => {
	const url = fetchWeather(lat, lon);
	return await request(url);
};
