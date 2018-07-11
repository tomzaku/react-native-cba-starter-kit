import React from 'react'
import { getTheme } from './themeHelper'

export const ThemeContext = React.createContext(getTheme())

// export const withTheme =
