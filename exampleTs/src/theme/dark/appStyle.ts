import { getAppStyle } from '@theme/appStyle'
import { metric } from './metric'
import { palette } from './palette'
import { typography } from './typography'

export const appStyle = getAppStyle(palette, metric, typography)
