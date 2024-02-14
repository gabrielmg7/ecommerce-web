import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`;

const AnimatedGrid = styled(Grid)`
  background-size: 200% 130%;
  background-image: linear-gradient(45deg, rgba(0, 215, 223, 0.3), rgba(0, 109, 240, 0.3), rgba(187, 208, 255, 0.3));
  animation: ${gradientAnimation} 10s ease infinite;
`;

interface GradientBackgroundGridProps {
  children: ReactNode;
}

const GradientBackgroundGrid: React.FC<GradientBackgroundGridProps> = ({ children }) => {
  return <AnimatedGrid>{children}</AnimatedGrid>;
};

export default GradientBackgroundGrid;