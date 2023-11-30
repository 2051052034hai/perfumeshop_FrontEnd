import axios from 'axios'
import Cookies from 'js-cookie'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/v1/api/',
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get('access-token')

  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
})

const get = (url, config) => {
  return axiosInstance.get(url, config)
}

const create = (url, data, config) => {
  return axiosInstance.post(url, data, config)
}

const update = (url, data, config) => {
  return axiosInstance.put(url, data, config)
}

const remove = (url, config) => {
  return axiosInstance.delete(url, config)
}

const updateMany = (url, data, config) => {
  return axiosInstance.patch(url, data, config)
}

export { get, create, update, remove, updateMany }