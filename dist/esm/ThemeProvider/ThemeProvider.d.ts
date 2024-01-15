import React, { ReactNode } from 'react';
interface Theme {
    colors: {
        primary: string;
        secondary: string;
    };
    fontSizes: {
        small: string;
        medium: string;
        large: string;
    };
    fontFamily: string;
}
interface ThemeProviderProps {
    theme: Theme;
    children: ReactNode;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => Theme;
export {};
