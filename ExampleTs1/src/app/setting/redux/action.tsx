import { action, ActionType } from 'typesafe-actions'
import { IReduxModule } from "redux-packaged";
import { SettingActionType } from "./actionType";
import { SettingSelector } from "./selector";

export type SettingActionCollection = ReturnType<typeof make>
export type SettingAction = ActionType<SettingActionCollection>

const make = ({ actionType }: IReduxModule<SettingActionType, SettingSelector>) => {
    return {
        updateLanguage: (languageTag: string) => action(actionType.UPDATE_LANGUAGE, {languageTag}),
        switchTheme: () => action(actionType.SWITCH_THEME)
    }
}

export default {
    make,
}

export {

}