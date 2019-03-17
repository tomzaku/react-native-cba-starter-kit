import { action, ActionType } from 'typesafe-actions'
import { IReduxModule } from "redux-packaged";
import { SandBoxActionType } from "./actionType";
import { SandBoxSelector } from "./selector";

export type SandBoxActionCollection = ReturnType<typeof make>
export type SandBoxAction = ActionType<SandBoxActionCollection>

const make = ({ actionType }: IReduxModule<SandBoxActionType, SandBoxSelector>) => {
    return {
        doSandBox: () => action(actionType.SAND_BOX),
    }
}

export default {
    make,
}

export {

}