/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 21:38:49
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 17:53:00
 * @Description:
 */
import { getVideoList } from '@/src/api/request/home'
import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/src/store'
import { setToken } from  '@/src/store/user'

export default function HomePage() {
	const [videoList, setVideoList] = useState<Record<string, any>[]>([])
  const userState = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
	useEffect(() => {
		const fetchData = async () => {
			const result = await getVideoList(1, 10)
			if (result.status === 200) {
				setVideoList(result.data.data.data)
			}
			console.log(result)
			console.log(userState)
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
