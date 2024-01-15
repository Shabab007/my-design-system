"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/Typography.tsx
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ThemeProvider_1 = require("../../ThemeProvider");
const StyledText = styled_components_1.default.div `
  font-size: ${(props) => props.fontSize};
`;
const Typography = ({ variant, children }) => {
    const theme = (0, ThemeProvider_1.useTheme)();
    const fontSize = theme.fontSizes[variant];
    return react_1.default.createElement(StyledText, { fontSize: fontSize }, children);
};
exports.default = Typography;
//# sourceMappingURL=Typogrpahy.js.map