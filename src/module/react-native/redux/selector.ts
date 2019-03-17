import { SelectorPath } from 'redux-packaged'

export type SandBoxSelector = ReturnType<typeof make>

const make = (local: string[], getAbsolutePath: SelectorPath) => ({
    getSandBox: getAbsolutePath(['count'])
})

export default {
    make
}
