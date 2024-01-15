// src/Typography.tsx
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../ThemeProvider';
const StyledText = styled.div `
  font-size: ${(props) => props.fontSize};
`;
const Typography = ({ variant, children }) => {
    const theme = useTheme();
    const fontSize = theme.fontSizes[variant];
    return React.createElement(StyledText, { fontSize: fontSize }, children);
};
export default Typography;
//# sourceMappingURL=Typogrpahy.js.map