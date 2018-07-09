export const addPrefix = (nameModule: string, nameApp = '@@app') => {
  const nameModuleCapital = nameModule.toUpperCase()
  return `${nameApp}/${nameModuleCapital}`
}

export const addSaga = (name: string) => {
  return `${name}__SAGA`
}

export default {
  addPrefix,
  addSaga,
}
