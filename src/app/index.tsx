/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 22:29:52
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 15:47:06
 * @Description:
 */
import { Redirect } from 'expo-router'
import { useAuth } from '@/src/hooks/useAuth'
export default function Index() {

  // TODO: 判断是否是第一次打开app，如果是，则跳转到欢迎页面，否则跳转到主页
  const { loading, token } = useAuth()
  console.log('Index', loading, token)
  if(loading) return <></>
  if(!token) return <Redirect href='/signIn' />
	return <Redirect href='/(tabs)' />
}
