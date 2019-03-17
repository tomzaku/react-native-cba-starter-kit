import reduxUtil, { ReturnActionType } from 'redux-packaged'

export type SandBoxActionType = ReturnActionType<typeof make>

const make = reduxUtil.actionType.make([
    'SAND_BOX',
])

export default {
	make,
}
