import { action, ActionType } from 'typesafe-actions'
import { IReduxModule } from "redux-packaged";
import { SampleActionType } from "./actionType";
import { SampleSelector } from "./selector";

export type SampleActionCollection = ReturnType<typeof make>
export type SampleAction = ActionType<SampleActionCollection>

const make = ({ actionType }: IReduxModule<SampleActionType, SampleSelector>) => {
    return {
        doSample: () => action(actionType.SAMPLE),
    }
}

export default {
    make,
}

export {

}