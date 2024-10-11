/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-09 22:53:46
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-11 23:25:56
 * @Description: 校验登录状态
 */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { AUTHORIZATION } from '@/api'

export const useAuth = () => {
	const [loading, setLoading] = useState(true)
	const [token, setToken] = useState<string | null>(null)

	useEffect(() => {
		const getAuth = async () => {
			const token = await AsyncStorage.getItem(AUTHORIZATION)
			setToken(token)
			setLoading(false)
		}
		getAuth()
	}, [])

	return {
		loading,
		token,
	}
}
