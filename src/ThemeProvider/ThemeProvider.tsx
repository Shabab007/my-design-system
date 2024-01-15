// src/ThemeProvider.tsx
import React, { createContext, useContext, ReactNode } from 'react'

interface Theme {
  colors: {
    primary: string
    secondary: string
  }
  fontSizes: {
    small: string
    medium: string
    large: string
  }
  fontFamily: string
}

interface ThemeProviderProps {
  theme: Theme
  children: ReactNode
}

const ThemeContext = createContext<Theme | undefined>(undefined)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const theme = useContext(ThemeContext)
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return theme
}
