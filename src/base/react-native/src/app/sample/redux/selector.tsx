import { SelectorPath } from 'redux-packaged'

export type SampleSelector = ReturnType<typeof make>

const make = (local: string[], getAbsolutePath: SelectorPath) => ({
    getSample: getAbsolutePath(['count'])
})

export default {
    make
}
