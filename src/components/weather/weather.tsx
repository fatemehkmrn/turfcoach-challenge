import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ViewBox from './viewBox/view-box';
import PrecipitationBox from './precipitationBox/precipitation-box';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import { handleFetchWeatherStatus } from '../../services/services';
import { WEATHER_CODES } from '../../constants/weathe-codes';
import { BERLIN } from '../../constants/coordinates';
import { IWeatherResponse } from '../../types/types';
import s from './weather.module.css';
import { AxiosResponse } from 'axios';

const Weather = () => {
    const [weatherStatus, setWeatherStatus] = useState<IWeatherResponse | AxiosResponse>();
    const time = new Date();
    useEffect(() => {
        handleFetchWeatherStatus(BERLIN.latitude, BERLIN.longtitude).then((res) => setWeatherStatus(res));
    }, []);

    return (
        <Box className={s.weather}>
            Berlin Weather
            <div className={s.current}>
                <div>
                    <div> {(weatherStatus as IWeatherResponse)?.current_weather.is_day === 1 ? <LightModeOutlinedIcon /> : <BedtimeOutlinedIcon />}</div>
                    <div>{WEATHER_CODES[(weatherStatus as IWeatherResponse)?.current_weather?.weathercode as number]}</div>
                    <div className={s.time}>{time.toLocaleTimeString()}</div>
                </div>
                <div>
                    <ViewBox title='temprature' value={(weatherStatus as IWeatherResponse)?.current_weather?.temperature as string} suffix='°C' />
                    <ViewBox title='wind' value={(weatherStatus as IWeatherResponse)?.current_weather?.windspeed as string} suffix='km/h' />
                </div>
            </div>
            Hourly Precipitation Forcast
            <div className={s.precipitation}>
                {(weatherStatus as IWeatherResponse)?.hourly.precipitation_probability.slice(time.getHours()).map((item, index) =>
                    <PrecipitationBox key={index} percent={item} time={24 - (weatherStatus as IWeatherResponse)?.hourly.precipitation_probability.slice(time.getHours()).length + index} />
                )}

            </div>
        </Box>
    );
};

export default Weather;
