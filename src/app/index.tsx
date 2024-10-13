/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 22:29:52
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 16:41:02
 * @Description:
 */
import { Redirect } from 'expo-router'
import { asyncStoreState } from '@/src/store'
import { useIsFirstOpenApp } from '../hooks/useIsFirstOpenApp'

export default function Index() {
	asyncStoreState()
	// 判断是否是第一次打开app，如果是，则跳转到欢迎页面，否则跳转到主页
  const { isFirstOpenApp , loading} = useIsFirstOpenApp()
	if (loading) return <></>
  if (isFirstOpenApp) return <Redirect href='/(root)/welcome' />
	return <Redirect href='/(tabs)' />
}



