/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 21:38:49
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-15 22:37:23
 * @Description:
 */
import { getVideoList } from '@/src/api/request/home'
import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { useSelector } from 'react-redux'
import type { RootState } from '@/src/store'
import Toast from 'react-native-root-toast'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/header'
import Content from './components/content'

export default function HomePage() {
	const [videoList, setVideoList] = useState<Record<string, any>[]>([])
  const userState = useSelector((state: RootState) => state.user)
	useEffect(() => {
		const fetchData = async () => {
			const result = await getVideoList(1, 10)
			if (result.status === 200) {
				setVideoList(result.data.data.data)
			}
			console.log(result.status)
			console.log(userState)
		}
		fetchData()
    // let toast = Toast.show('Request failed to send.', {
		// 	duration: Toast.durations.LONG,
		// 	position: Toast.positions.CENTER,
    //   opacity: 0.6,
		// })
	}, [])

	return (
		<SafeAreaView style={styles.homeContainer}>
			{/* 头部 */}
			<Header/>
			{/* 内容 */}
      <Content />

		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	homeContainer: {
		flex: 1,
		backgroundColor: '#fff',
	},
})
