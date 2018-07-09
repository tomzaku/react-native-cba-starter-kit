import { Dimensions, StatusBar } from 'react-native'

const { width, height } = Dimensions.get('window')

// Calculating ratio from iPhone breakpoints
// let ratioYValue;
const getRatioValue = (width: number) => {
	if (width < 375) {
		return width < 320 ? 0.75 : 0.875
	}
	return 1
}
const ratioXValue = getRatioValue(width)

// we're simulating EM by changing font size according to ratioX

// We add an em() shortcut function
export const getEm = (baseUnit: number) => (value: number) => {
	const unit = baseUnit * ratioXValue
	return unit * value
}

