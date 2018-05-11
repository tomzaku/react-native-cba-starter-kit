import { Dimensions, StatusBar } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
let ratioXValue;
// let ratioYValue;

if (width < 375) {
  ratioXValue = width < 320 ? 0.75 : 0.875;
} else {
  ratioXValue = 1;
}


// Set base font size =16
const basrUnit = 16;

// we're simulating EM by changing font size according to ratioX
const unit = basrUnit * ratioXValue;

// We add an em() shortcut function
export const em = (value) => {
  return unit * value;
}

export default em;