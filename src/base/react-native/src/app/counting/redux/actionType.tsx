import reduxUtil, { ReturnActionType } from 'redux-packaged'

export type CountingActionType = ReturnActionType<typeof make>

const make = reduxUtil.actionType.make([
    'INCREASING',
    'DECREASING'
])

export default {
	make,
}
