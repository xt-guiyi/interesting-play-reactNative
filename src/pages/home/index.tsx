/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 21:38:49
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 19:06:23
 * @Description:
 */
import { getVideoList } from '@/src/api/request/home'
import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import type { RootState } from '@/src/store'
import Toast from 'react-native-root-toast'

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
		<View>
			{videoList.map((item, index) => {
				return (
					<View key={item.id}>
						<Text>{item.title}</Text>
						<Text>{item.desc}</Text>
					</View>
				)
			})}
		</View>
	)
}
