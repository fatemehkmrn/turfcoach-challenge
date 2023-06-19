import axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (config.headers != null) {
    config.headers['content-type'] = 'application/json'

    // if we had authorization system we could add the following line:
    // config.headers.common['Authorization'] = `Bearer token`
  }
  return config
}
const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  return await Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // We can handle some general operations here
  return response?.data
}
const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  // We can handle server side messages here, for example pass them to an alert if we had
  return await Promise.reject(error)
}

export function setupInterceptorsTo (axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest as AxiosInstance , onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.open-meteo.com/v1'
})
export const request: AxiosInstance = setupInterceptorsTo(axiosInstance)
