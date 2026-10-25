import {WttrType} from "../types/wttr-response";

export type CurrentWeather = {
  city: string;
  temperatureC: string;
  feelsLikeC: string;
  conditions: string;
  humidity: string;
  windSpeedKmph: string;
};

export const getWeather = async (
  city: string,
): Promise<CurrentWeather> => {
  const url = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Weather API returned HTTP ${response.status}`);
  }

  const data = await response.json();

  const current: WttrType["current_condition"][0] = data.current_condition[0];

  return {
    city,
    temperatureC: current.temp_C,
    feelsLikeC: current.FeelsLikeC,
    conditions: current.weatherDesc[0].value,
    humidity: current.humidity,
    windSpeedKmph: current.windspeedKmph,
  };
};