import reduxUtil, { ReturnActionType } from 'redux-packaged'

export type SampleActionType = ReturnActionType<typeof make>

const make = reduxUtil.actionType.make([
    'SAMPLE',
])

export default {
	make,
}
