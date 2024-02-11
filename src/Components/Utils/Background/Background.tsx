import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useThemeContext } from '../../../Themes/ThemeProviderWrapper';

const StyledBackground = styled.div<{ background: string }>`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.background};
`;

interface BackgroundProps {
    children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
    const { theme } = useThemeContext();

    return (
        <StyledBackground background={theme.palette.background.default}>
            {children}
        </StyledBackground>
    )
}

export default Background