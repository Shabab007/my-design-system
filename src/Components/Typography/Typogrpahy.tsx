// src/Typography.tsx
import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../ThemeProvider'

interface TypographyProps {
  variant: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

const StyledText = styled.div<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
`

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  const theme = useTheme()
  const fontSize = theme.fontSizes[variant]

  return <StyledText fontSize={fontSize}>{children}</StyledText>
}

export default Typography
