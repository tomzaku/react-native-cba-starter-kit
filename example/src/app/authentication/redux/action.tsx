import { action, ActionType } from 'typesafe-actions'
import { IReduxModule } from "redux-packaged";
import { AuthActionType } from "./actionType";
import { AuthSelector } from "./selector";

export type AuthActionCollection = ReturnType<typeof make>
export type AuthAction = ActionType<AuthActionCollection>

const make = ({ actionType }: IReduxModule<AuthActionType, AuthSelector>) => {
    return {
        login: () => action(actionType.LOGIN),
        logout: () => action(actionType.LOGOUT),
    }
}

export default {
    make,
}

export {

}