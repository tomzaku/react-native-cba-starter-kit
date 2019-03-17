import reduxUtil, { ReturnActionType } from 'redux-packaged'

export type AuthActionType = ReturnActionType<typeof make>

const make = reduxUtil.actionType.make([
    'LOGIN',
    'LOGOUT'
])

export default {
	make,
}
