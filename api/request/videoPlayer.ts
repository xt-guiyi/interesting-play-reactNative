/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-11 22:09:19
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-11 22:29:22
 * @Description: 视频详情页接口
 */
import request from '../index'

export const getVideoDetail = (id: number) => {
	return request.get(`mock/getVideoDetail?id=${id}`)
}

export const getCommentList = (page: number, pageSize: number) => {
	return request.get(`mock/getCommentList?page=${page}&pageSize=${pageSize}`)
}
