/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 22:29:52
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-08 22:40:56
 * @Description:
 */
import { Redirect } from 'expo-router'

export default function Index() {
	if (true) {
		return <Redirect href='/(root)/signIn' />
	}else {
    return <Redirect href="/(tabs)" />
  }
}
