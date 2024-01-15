// src/Typography.tsx
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../ThemeProvider';
const StyledText = styled.div `
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontSize};
`;
const Typography = ({ variant, textColor = 'textPrimary', children }) => {
    const theme = useTheme();
    const fontSize = theme.fontSizes.headerSizes[variant];
    const color = theme.colors.text[textColor];
    return (React.createElement(StyledText, { textColor: color, fontSize: fontSize }, children));
};
export default Typography;
//# sourceMappingURL=Typogrpahy.js.map