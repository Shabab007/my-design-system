// src/Typography.tsx
import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../ThemeProvider'
import { TypographyProps } from './types'

const StyledText = styled.div<{ fontSize: string; textColor: string }>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontSize};
`

const Typography: React.FC<TypographyProps> = ({ variant, textColor = 'textPrimary', children }) => {
  const theme = useTheme()
  const fontSize = theme.fontSizes.headerSizes[variant]
  const color: string = theme.colors.text[textColor]

  return (
    <StyledText textColor={color} fontSize={fontSize}>
      {children}
    </StyledText>
  )
}

export default Typography
