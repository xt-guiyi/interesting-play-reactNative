/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-11 22:09:19
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-11 22:22:57
 * @Description: 首页接口
 */
import request from '../index'

export const getVideoList = (page: number, pageSize: number) => {
	return request.get(`mock/getVideoList?page=${page}&pageSize=${pageSize}`)
}

