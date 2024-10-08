/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 22:59:07
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-08 23:00:23
 * @Description: 
 */
import type { AxiosRequestConfig, AxiosError } from 'axios'
import axios, { AxiosResponse } from 'axios'
// import { localStorage } from '@/utils/local-storage'
// import { notification } from 'ant-design-vue'
// import { loginRoutePath } from '@/router/define-meta';

// 这里是用于设定请求后端时，所用的 Token KEY
// 可以根据自己的需要修改，常见的如 Access-Token，Authorization
// 需要注意的是，请尽量保证使用中横线`-` 来作为分隔符，
// 避免被 nginx 等负载均衡器丢弃了自定义的请求头
export const REQUEST_TOKEN_KEY = 'Access-Token'

// 创建 axios 实例
const request = axios.create({
	// API 请求的默认前缀
	baseURL: '',
	timeout: 6000, // 请求超时时间
})
export type RequestError = AxiosError<{
	message?: string
	result?: any
	errorMessage?: string
}>
// 异常拦截处理器
const errorHandler = (error: RequestError): Promise<any> => {
	if (error.response) {
		const { data = {}, status, statusText } = error.response
		// 403 无权限
		// if (status === 403) {
		// 	notification.error({
		// 		message: 'Forbidden',
		// 		description: (data && data.message) || statusText,
		// 	})
		// }
		// 401 未登录/未授权
		if (status === 401 && data.result && data.result.isLogin) {
			// notification.error({
			// 	message: 'Unauthorized',
			// 	description: 'Authorization verification failed',
			// })
		}
	}
	return Promise.reject(error)
}

// 请求拦截器
const requestHandler = (config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
	const savedToken = localStorage.get('STORAGE_TOKEN_KEY')
	// 如果 token 存在
	// 让每个请求携带自定义 token, 请根据实际情况修改
	// if (savedToken) {
	// 	config.headers[REQUEST_TOKEN_KEY] = savedToken
	// }
	return config
}

// Add a request interceptor
// request.interceptors.request.use(requestHandler, errorHandler)

// 响应拦截器
const responseHandler = (response: AxiosResponse<any>) => {
	return response.data
}

// Add a response interceptor
request.interceptors.response.use(responseHandler, errorHandler)

export { AxiosResponse }

export default request
