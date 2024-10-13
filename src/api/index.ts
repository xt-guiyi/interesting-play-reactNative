/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 22:59:07
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 19:22:40
 * @Description: axios请求封装
 */
import type { AxiosError, InternalAxiosRequestConfig } from 'axios'
import axios, { AxiosResponse } from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AUTHORIZATION, REFRESH_TOKEN } from '@/src/constants/app'
import Toast from 'react-native-root-toast'
import { handlerErrorCode } from '@/src/constants/httpError'
import { Platform } from 'react-native'
// import { notification } from 'ant-design-vue'

export interface ResponseData<T> {
	code: number
	message: string
	data: T
}

// 创建 axios 实例
console.log(process.env)
const request = axios.create({
	// API 请求的默认前缀
	baseURL: process.env.EXPO_PUBLIC_API_URL,
	timeout: 6000, // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error: AxiosError<ResponseData<any>, any>): Promise<any> => {
	if (error.response) {
		// 请求成功发出且服务器也响应了状态码，但是状态码超出了 2xx 的范围
		const status = error.response.status
		// 处理不同的 HTTP 错误状态码
    const message = handlerErrorCode(status)
    if(Platform.OS === 'web') {
      console.error(message)
    }else {
			Toast.show(message, {
				duration: Toast.durations.LONG,
				position: Toast.positions.CENTER,
				opacity: 0.6,
				textColor: 'white',
			})
		}
	} else if (error.request) {
		// 请求已经成功发起，但没有收到响应
		console.error(`错误类型：${error.name}，错误信息：${error.message}`)
	} else {
		// 发送请求时出了点问题
		console.error('Axios错误', error.message)
	}
	return Promise.resolve(error)
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
