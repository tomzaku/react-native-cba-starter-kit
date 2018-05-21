export const addPrefix = (nameModule = '', nameApp = '@@app') => {
  const nameModuleCapital = nameModule.toUpperCase()
  return `${nameApp}/${nameModuleCapital}/`
}

export const addSaga = (name) => {
  return `${name}/SAGA`
}

export default {
  addPrefix,
  addSaga,
}