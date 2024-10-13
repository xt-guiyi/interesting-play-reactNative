/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 22:34:53
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 17:53:58
 * @Description: 
 */
import { Stack } from "expo-router";


export default function RootLayout() {
  return (
		<Stack>
			<Stack.Screen name='signIn' options={{ headerShown: false }} />
		</Stack>
	)
} 