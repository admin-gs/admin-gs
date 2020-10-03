import React from 'react';

export interface Props {
    color?: 'primary' | 'accent' | 'success' | 'warning' | 'error';
}

export const Tag: React.FC<Props> = ({children, color}) => <span className={`tag is-${color || 'primary'}`}>{children}</span>
