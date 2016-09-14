/**
	@flow
**/
import types from '../constants/ActionTypes'
import WebAPIUtils from '../utils/WebAPIUtils'

export function login(params: {
	account: string,
	pwd: string
}): {
	types: array,
	promise: Promise
}{
	return {
		type: types.LOGIN_SUCCESS
	};
}
