/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-09 21:12:25
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-09 21:44:59
 * @Description: 用户数据
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
export interface UserState {
  token: string | null
  userInfo: object
}

// 使用该类型定义初始 state
const initialState: UserState = {
	token: '',
	userInfo: {
      name: 'xt_guiyi',
  },
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload
			AsyncStorage.setItem('token', action.payload)
		},
		clearToken: state => {
			state.token = null
			AsyncStorage.removeItem('token')
		},
		setUserInfo: (state, action: PayloadAction<object>) => {
			state.userInfo = action.payload
		},
    clearUserInfo: state => {
      state.userInfo = {}
    }
	},
})

export const { setToken, setUserInfo } = userSlice.actions

export default userSlice.reducer
