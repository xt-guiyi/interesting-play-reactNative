/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-15 22:25:57
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-15 22:35:32
 */
import { AntDesign, Fontisto, Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function Header() {
  const [placeHolder, setPlaceHolder] = useState('搜索')
  const titleList = [
		'拜登把泽连斯基叫成普京',
		'原神肯德基套餐上线',
		'macbookair13寸和15寸差别多大',
		'绝区零KDA双厨狂喜',
		'北伐是什么梗',
		'神偷奶爸今日上映',
		'通往夏天的隧道',
		'安卓开发',
	]

  useEffect(() => {
    const time = setTimeout(() => {
      setPlaceHolder(titleList[Math.floor(Math.random() * titleList.length)])
    }, 8000)
    return () => {
      clearTimeout(time)
    }
  }, [])

  return (
		<View style={styles.headerContainer}>
			<Image
				source={{ uri: 'https://avatars.githubusercontent.com/u/62164967?v=4&size=64' }}
				style={{ width: 36, height: 36, borderRadius: 50, marginRight: 12 }}
			/>
			<View style={styles.headerSearchBox}>
				<AntDesign name='search1' size={22} color='silver' />
				<AntDesign name='search1' size={22} color='silver' />
				<Text style={{ color: 'silver', fontSize: 16, marginLeft: 2 }}>{placeHolder}</Text>
			</View>
			<Fontisto name='email' size={24} color='black' style={{ marginLeft: 12 }} />
		</View>
	)
}

const styles = StyleSheet.create({
	headerContainer: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 12,
		paddingRight: 12,
	},
	headerSearchBox: {
		height: 32,
		flex: 1,
		flexDirection: 'row',
		borderRadius: 20,
    borderColor: 'silver',
    borderWidth: 1,
		backgroundColor: 'white',
		paddingLeft: 12,
		paddingRight: 12,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
})

