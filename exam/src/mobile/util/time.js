import moment from 'moment'

export const canPressItem = (afterTime, delayTime) => {
  if (!afterTime) {
    return true
  } else {
    const period = new Date() - afterTime
    return period > delayTime
  }
}

export const pressItemGeneral = (onPress = () => {}, options) => {
  if (!global.pressGeneralTime) {
    global.pressGeneralTime = moment('0','YYYY')
  }
  const onPressAndSaveTime = (time) => {
    global.pressGeneralTime = time
    onPress()
  }
  return delayPressItem(onPressAndSaveTime)({...options, timePress: global.pressGeneralTime})
}
export const delayPressItem = (onPress) => {
  return function (options) {
    const { delay = 1000, timePress = new Date() } = options
    if (canPressItem(timePress, delay)) {
      onPress && onPress(new Date())
    }
  }
}