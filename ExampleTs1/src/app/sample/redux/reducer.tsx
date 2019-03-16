import { IReduxModuleAction } from 'redux-packaged'
import { SampleActionType } from './actionType';
import { SampleSelector } from './selector';
import { SampleAction } from './action';
import { ReducerAction } from 'typings/redux';

export type SampleIntialState = {
    count: number
}

const initialState = {
    count: 0
}

const make = ({actionType}: IReduxModuleAction<SampleActionType, SampleSelector, SampleAction>) => 
    (state = initialState, action: ReducerAction<SampleAction>): SampleIntialState => {
        switch(action.type) {
            case actionType.SAMPLE: return { ...state, count: state.count - 1 }
            default: return state
        }
    }

export default {
    make
}