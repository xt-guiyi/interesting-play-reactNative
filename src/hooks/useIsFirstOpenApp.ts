/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-09 22:53:46
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 16:40:39
 * @Description: 是否第一次打开应用
 */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { FIRST_OPEN_APP } from '../constants/app'

export const useIsFirstOpenApp = () => {
	const [loading, setLoading] = useState(false)
	const [isFirstOpenApp, setIsFirstOpenApp] = useState<boolean>(false)

	useEffect(() => {
		const getLocalStatus = async () => {
			try {
				const isFirst = await AsyncStorage.getItem(FIRST_OPEN_APP)
				if (!isFirst) {
					setIsFirstOpenApp(true)
          AsyncStorage.setItem(FIRST_OPEN_APP, '1')
				}
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}
		getLocalStatus()
	}, [])

	return {
		loading,
		isFirstOpenApp,
	}
}
