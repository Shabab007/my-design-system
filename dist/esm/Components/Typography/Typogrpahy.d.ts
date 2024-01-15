import React from 'react';
interface TypographyProps {
    variant: 'small' | 'medium' | 'large';
    children: React.ReactNode;
}
declare const Typography: React.FC<TypographyProps>;
export default Typography;
