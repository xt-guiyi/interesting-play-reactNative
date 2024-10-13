/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-13 18:48:11
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 19:20:19
 */
/**
 * HTTP错误码常量
 */
export class HttpError {
	static readonly BAD_REQUEST = { code: 400, message: '错误的请求' }
	static readonly UNAUTHORIZED = { code: 401, message: '未授权，请重新登录' }
	static readonly FORBIDDEN = { code: 403, message: '没有访问权限' }
	static readonly NOT_FOUND = { code: 404, message: '资源未找到' }
	static readonly METHOD_NOT_ALLOWED = { code: 405, message: '方法不允许' }
	static readonly CONFLICT = { code: 409, message: '请求冲突' }

	static readonly INTERNAL_SERVER_ERROR = { code: 500, message: '服务器错误，请稍后重试' }
	static readonly BAD_GATEWAY = { code: 502, message: '网关错误' }
	static readonly SERVICE_UNAVAILABLE = { code: 503, message: '服务不可用' }
	static readonly GATEWAY_TIMEOUT = { code: 504, message: '网关超时' }
}

export const handlerErrorCode = (code: number) => {
  let errorMessage = ''
	switch (code) {
		case HttpError.BAD_REQUEST.code:
			errorMessage = HttpError.BAD_REQUEST.message
			break
		case HttpError.UNAUTHORIZED.code:
			errorMessage = HttpError.UNAUTHORIZED.message
			break
		case HttpError.FORBIDDEN.code:
			errorMessage = HttpError.FORBIDDEN.message
			break
		case HttpError.NOT_FOUND.code:
			errorMessage = HttpError.NOT_FOUND.message
			console.error(errorMessage)
			break
		case HttpError.METHOD_NOT_ALLOWED.code:
			errorMessage = HttpError.METHOD_NOT_ALLOWED.message
			break
		case HttpError.CONFLICT.code:
			errorMessage = HttpError.CONFLICT.message
			break
		case HttpError.INTERNAL_SERVER_ERROR.code:
			errorMessage = HttpError.INTERNAL_SERVER_ERROR.message
			break
		case HttpError.BAD_GATEWAY.code:
			errorMessage = HttpError.BAD_GATEWAY.message
			break
		case HttpError.SERVICE_UNAVAILABLE.code:
			errorMessage = HttpError.SERVICE_UNAVAILABLE.message
			break
		case HttpError.GATEWAY_TIMEOUT.code:
			errorMessage = HttpError.GATEWAY_TIMEOUT.message
			break
		default:
			errorMessage = `http错误码: ${code}`
			break
	}
  return errorMessage
}
