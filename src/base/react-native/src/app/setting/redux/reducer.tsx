import { IReduxModuleAction } from 'redux-packaged'
import { SettingActionType } from './actionType';
import { SettingSelector } from './selector';
import { SettingAction } from './action';
import { ReducerAction } from 'typings/redux';

export type SettingIntialState = {
    languageTag: string,
    themeMode: 'light' | 'dark'
}
const initialState = {
    languageTag: 'en',
    themeMode: 'light'
}

const make = ({actionType}: IReduxModuleAction<SettingActionType, SettingSelector, SettingAction>) => 
    (state = initialState, action: ReducerAction<SettingAction>) => {
        switch(action.type) {
            case actionType.UPDATE_LANGUAGE: return { ...state, languageTag: action.payload.languageTag }
            case actionType.SWITCH_THEME: return { ...state, themeMode: state.themeMode === 'light' && 'dark' || 'light'}
            default: return state
        }
    }

export default {
    make
}