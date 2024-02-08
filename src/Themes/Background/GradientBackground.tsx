import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface GradientBackgroundProps {
    children?: React.ReactNode;
}

const moveGradient = keyframes`
  to {
    background-position: 100% 0%;
  }
`;

const GradientBackgroundContainer = styled.div<{ height: number }>`
    width: 100%;
    height: 100%;
    position: relative;
    min-height: 100vh;                  
    top: 0;
    left: 0;                  
    background: linear-gradient(
        to left,
        #00D7DF,
        #003F8A,
        #006DF0,
        #003F8A,
        #00D7DF
    );
    background-size: 300% 100%;
    animation: ${moveGradient} 100s linear infinite;
`;

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <GradientBackgroundContainer height={height}>
            {children}
        </GradientBackgroundContainer>
    );
};

export default GradientBackground;
