import apiConfig from "../../config/api"
import { WeatherResult } from "./interface"

export const getWeather = async (latitude: number, longitude: number): Promise<WeatherResult> => {
  const url = `/weather?latitude=${latitude}&longitude=${longitude}`
  const response = await apiConfig.get(url)
  return response.data
}
