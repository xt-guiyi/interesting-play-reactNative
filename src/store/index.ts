/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 23:02:08
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 17:54:22
 * @Description:
 */
import { configureStore } from '@reduxjs/toolkit'
import userReducer, { setToken } from './user'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AUTHORIZATION } from '@/src/constants/app'
import { useDispatch } from 'react-redux'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
	reducer: {
		user: userReducer,
	},
})

/**
 * 同步本地存储状态到Redux store
 */
export async function asyncStoreState() {
	const dispatch = useDispatch()
	const token = await AsyncStorage.getItem(AUTHORIZATION)
	if (token) dispatch(setToken(token))
	// TODO: 用户状态同步
}

export default store
