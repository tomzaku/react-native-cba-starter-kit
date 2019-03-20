import { IReduxModuleAction } from 'redux-packaged'
import { AuthActionType } from './actionType';
import { AuthSelector } from './selector';
import { AuthAction } from './action';
import { ReducerAction } from 'typings/redux';

export type AuthenticationState = {
    isAuthentication: boolean
}

const initialState = {
    isAuthentication: false,
}

const make = ({actionType}: IReduxModuleAction<AuthActionType, AuthSelector, AuthAction>) => 
    (state = initialState, action: ReducerAction<AuthAction>): AuthenticationState => {
        switch(action.type) {
            case actionType.LOGIN: return { isAuthentication: true }
            case actionType.LOGOUT: return { isAuthentication: false }
            default: return state
        }
    }

export default {
    make
}