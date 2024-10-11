/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 21:31:35
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-11 23:38:59
 * @Description: 
 */
import { Stack,Slot } from "expo-router";
import React from "react";
export default function AppLayout() {
  console.log('AppLayout')
  return (
		<Stack screenOptions={{ headerShown: false }} initialRouteName="(tabs)">
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
		</Stack>
	)
}
