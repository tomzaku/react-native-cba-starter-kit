import reduxUtil, { ReturnActionType } from 'redux-packaged'

export type SettingActionType = ReturnActionType<typeof make>

const make = reduxUtil.actionType.make([
    'UPDATE_LANGUAGE',
    'SWITCH_THEME'
])

export default {
	make,
}
