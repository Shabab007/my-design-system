import { ReactNode } from 'react'

export interface TextColor {
  textPrimary: string
  textSecondary: string
}
export interface Theme {
  colors: {
    primary: string
    secondary: string
    text: TextColor
  }
  fontSizes: {
    headerSizes: {
      sm: string
      md: string
      lg: string
    }
    bodySizes: {
      sm: string
      lg: string
      xs: string
      xl: string
      md: string
    }
  }
  fontFamily: string
}

export interface ThemeProviderProps {
  theme: Theme
  children: ReactNode
}
