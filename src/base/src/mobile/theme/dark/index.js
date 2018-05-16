import color from './color'
import font from '../default/font'
import metric from '../default/metric'
import image from '../default/image'
import applicationStyleFunc from './applicationStyle'
import animation from '../default/animation'
import unit from '../default/unit'

const applicationStyle = applicationStyleFunc(color, metric, font)
export { color, font, image, metric, applicationStyle, animation, unit }
