/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 21:38:49
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 15:46:23
 * @Description:
 */
import { getVideoList } from '@/src/hooks/api/request/home'
import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

export default function HomePage() {
	const [videoList, setVideoList] = useState<Record<string, any>[]>([])

	useEffect(() => {
		console.log('HomePage')
		const fetchData = async () => {
			const result = await getVideoList(1, 10)
			if (result.status === 200) {
				setVideoList(result.data.data.data)
			}
			console.log(result)
		}
		fetchData()
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
