/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 22:59:07
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-11 23:09:50
 * @Description: axios请求封装
 */
import type { AxiosError, InternalAxiosRequestConfig } from 'axios'
import axios, { AxiosResponse } from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { notification } from 'ant-design-vue'

export const AUTHORIZATION = 'authorization'
export const REFRESH_TOKEN = 'refreshToken'
export interface ResponseData<T> {
	code: number
	message: string
	data: T
}

// 创建 axios 实例
const request = axios.create({
	// API 请求的默认前缀
	baseURL: 'http://192.168.31.232:3000/',
	timeout: 6000, // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error: AxiosError<ResponseData<any>, any>): Promise<any> => {
	if (error.response) {
		// 请求成功发出且服务器也响应了状态码，但是状态码超出了 2xx 的范围
		const { data, status, statusText } = error.response
		// 403 无权限
		// if (status === 403) {
		// 	notification.error({
		// 		message: 'Forbidden',
		// 		description: (data && data.message) || statusText,
		// 	})
		// }
		// 401 未登录/未授权
		// if (status === 401 && data.result && data.result.isLogin) {
		// notification.error({
		// 	message: 'Unauthorized',
		// 	description: 'Authorization verification failed',
		// })
		// }
	}else if(error.request){
		// 请求已经成功发起，但没有收到响应
		// `error.request` 在浏览器中是 XMLHttpRequest 的实例，
		// 而在node.js中是 http.ClientRequest 的实例
		console.log(`错误类型：${error.name}，错误信息：${error.message}`)
	}else{
		// 发送请求时出了点问题
		console.log('Axios错误', error.message)
	}
	return Promise.reject(error)
}

// 请求拦截器
const requestHandler = async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
	const savedToken = await AsyncStorage.getItem(AUTHORIZATION)
	if (savedToken) {
		config.headers[AUTHORIZATION] = savedToken
	}
	return config
}
request.interceptors.request.use(requestHandler, errorHandler)

// 响应拦截器
const responseHandler = async (response: AxiosResponse<ResponseData<any>, any>) => {
	if (response.headers[REFRESH_TOKEN]) {
		await AsyncStorage.setItem(AUTHORIZATION, response.headers[REFRESH_TOKEN])
	}
	return response
}
request.interceptors.response.use(responseHandler, errorHandler)

export { AxiosResponse }

export default request
