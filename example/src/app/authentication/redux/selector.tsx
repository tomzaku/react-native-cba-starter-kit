import { SelectorPath } from 'redux-packaged'

export type AuthSelector = ReturnType<typeof make>

const make = (local: string[], getAbsolutePath: SelectorPath) => ({
    isAuthenticated: getAbsolutePath(['isAuthentication'])
})

export default {
    make
}
