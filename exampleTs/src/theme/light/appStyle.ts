import { getAppStyle } from '../helper/appStyle'
import { metric } from './metric'
import { palette } from './palette'
import { typography } from './typography'

export const appStyle = getAppStyle(palette, metric, typography)
