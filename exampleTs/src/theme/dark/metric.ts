import { getMetric } from '../helper/metric'
import { spacing } from './spacing'

export const metric = getMetric(spacing.unit)

export type TMetric = typeof metric
