import { weatherService } from "../../../service";
import { ForecastDto } from "../../dto/forecast";
import { WeatherDto } from "../../dto/weather";

export const getWeather = async (latitude: number, longitude: number): Promise<WeatherDto[]> => {
  const weather = await weatherService.getWeather(latitude, longitude)

  return weather.results.map<WeatherDto>(weather => ({
    description: weather.description,
    forecast: weather.forecast.map<ForecastDto>(forecast => ({
      description: forecast.description,
      weekday: forecast.weekday,
      condition: forecast.condition,
      max: forecast.max,
      min: forecast.min,
    })),
    sunrise: weather.sunrise,
    temperature: weather.temp,
    sunset: weather.sunset,
    city: weather.city,
    date: weather.date,
    time: weather.time,
    wind: weather.wind_speedy,
    humidity: weather.humidity,
  }))
}

