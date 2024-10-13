/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 21:31:35
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 16:41:48
 * @Description: 
 */
import { Stack,Slot } from "expo-router";
import React from "react";
import { Provider as ReduxProvider, useDispatch } from 'react-redux'
import store from '@/src/store'

export default function AppLayout() {
  return (
		<ReduxProvider store={store}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name='index' options={{ headerShown: false }} />
				<Stack.Screen name='(auth)' options={{ headerShown: false }} />
				<Stack.Screen name='(root)' options={{ headerShown: false }} />
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			</Stack>
		</ReduxProvider>
	)
}

