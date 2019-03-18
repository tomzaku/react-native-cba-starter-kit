import { action, ActionType } from 'typesafe-actions'
import { IReduxModule } from "redux-packaged";
import { CountingActionType } from "./actionType";
import { CountingSelector } from "./selector";

export type CountingActionCollection = ReturnType<typeof make>
export type CountingAction = ActionType<CountingActionCollection>

const make = ({ actionType }: IReduxModule<CountingActionType, CountingSelector>) => {
    return {
        increasing: () => action(actionType.INCREASING),
        decreasing: () => action(actionType.DECREASING)
    }
}

export default {
    make,
}

export {

}