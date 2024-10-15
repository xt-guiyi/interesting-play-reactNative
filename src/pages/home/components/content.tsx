/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-15 22:25:57
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-15 22:38:25
 */
import { AntDesign, Fontisto, Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function Content() {
	useEffect(() => {}, [])

	return (
		<View style={styles.ContentContainer}>
			<Text style={{ fontSize: 24, color: 'black' }}>首页</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	ContentContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
	},
})
