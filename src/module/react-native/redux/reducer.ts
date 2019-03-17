import { IReduxModuleAction } from 'redux-packaged'
import { SandBoxActionType } from './actionType';
import { SandBoxSelector } from './selector';
import { SandBoxAction } from './action';
import { ReducerAction } from 'typings/redux';

export type SandBoxIntialState = {
    count: number
}

const initialState = {
    count: 0
}

const make = ({actionType}: IReduxModuleAction<SandBoxActionType, SandBoxSelector, SandBoxAction>) => 
    (state = initialState, action: ReducerAction<SandBoxAction>): SandBoxIntialState => {
        switch(action.type) {
            case actionType.SAND_BOX: return { ...state, count: state.count - 1 }
            default: return state
        }
    }

export default {
    make
}