import * as R from 'ramda'
const key = ['xs','sm','md', 'lg', 'xl', 'xxl']
const value = [0.5, 0.75, 1, 1.5, 1.5, 2]
const LEVEL_DEFAULT = R.zipObj(key, value)

const build = (spacingUnit: number, level = LEVEL_DEFAULT) => {
    return R.zipObj(R.keys(level), R.values(level).map(value => value * spacingUnit))
}

export {
    build
}