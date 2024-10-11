/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-11 22:09:19
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-11 22:29:14
 * @Description:发现页接口
 */
import request from '../index'

export const getDiscoverList = (page: number, pageSize: number) => {
	return request.get(`mock/getDiscoverList?page=${page}&pageSize=${pageSize}`)
}

