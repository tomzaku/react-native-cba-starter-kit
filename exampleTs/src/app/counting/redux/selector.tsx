import { SelectorPath } from 'redux-packaged'

export type CountingSelector = ReturnType<typeof make>

const make = (local: string[], getAbsolutePath: SelectorPath) => ({
    getCount: getAbsolutePath(['count'])
})

export default {
    make
}

