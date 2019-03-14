import { IReduxModuleAction } from 'redux-packaged'
import { CountingActionType } from './actionType';
import { CountingSelector } from './selector';
import { CountingAction } from './action';
import { ReducerAction } from 'typings/redux';

type CountingState = {
    count: number
}
const initialState = {
    count: 0
}

const make = ({actionType}: IReduxModuleAction<CountingActionType, CountingSelector, CountingAction>) => 
    (state: CountingState = initialState, action: ReducerAction<CountingAction>): CountingState => {
        switch(action.type) {
            case 'DECREASING': return { count: state.count - 1 }
            case 'INCREASING': return { count: state.count + 1 }
            default: return state
        }
    }

export default {
    make
}