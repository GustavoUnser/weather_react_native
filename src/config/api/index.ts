import axios from "axios";

const newsApi = axios.create({
  baseURL: 'https://api.hgbrasil.com/',
  params: {
    apiKey: '72be6fd7'
  }
})

export default newsApi
