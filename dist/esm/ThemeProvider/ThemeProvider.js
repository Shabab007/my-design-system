// src/ThemeProvider.tsx
import React, { createContext, useContext } from 'react';
const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ theme, children }) => {
    return React.createElement(ThemeContext.Provider, { value: theme }, children);
};
export const useTheme = () => {
    const theme = useContext(ThemeContext);
    if (!theme) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return theme;
};
//# sourceMappingURL=ThemeProvider.js.map