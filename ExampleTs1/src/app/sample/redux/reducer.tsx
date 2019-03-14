import { IReduxModuleAction } from 'redux-packaged'
import { SampleActionType } from './actionType';
import { SampleSelector } from './selector';
import { SampleAction } from './action';
import { ReducerAction } from 'typings/redux';

const initialState = {
    count: 0
}

const make = ({actionType}: IReduxModuleAction<SampleActionType, SampleSelector, SampleAction>) => 
    (state = initialState, action: ReducerAction<SampleAction>) => {
        switch(action.type) {
            case actionType.SAMPLE: return { count: state.count - 1 }
            default: return state
        }
    }

export default {
    make
}