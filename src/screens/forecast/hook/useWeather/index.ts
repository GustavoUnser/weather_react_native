import { useCallback, useState } from "react"
import { WeatherDto } from "../../../../domain/dto/weather"
import { weatherRepository } from "../../../../domain/repository"

const useWeather = (latitude: number, longitude: number) => {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState<WeatherDto[]>()

  const loadWeather = useCallback(async () => {
    setLoading(true)

    const result = await weatherRepository.getWeather(latitude, longitude)

    setWeather(result)
    setLoading(false)
  }, [latitude, longitude])

  return {
    loading,
    weather,
  }
}

export default useWeather
