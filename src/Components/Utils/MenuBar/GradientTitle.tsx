import { Box, Typography } from '@mui/material';
import { useThemeContext } from '../../../Themes/ThemeProviderWrapper';
import React from 'react';

const GradientTitle: React.FC = () => {
    const { theme } = useThemeContext();

    const gradientColors = theme.palette.mode === 'light'
        ? '#bbd0ff, #00D7DF, #00D7DF, #bbd0ff,#00D7DF, #bbd0ff' 
        : '#00D7DF, #006DF0, #006DF0, #00D7DF, #006DF0';

    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to right, ${gradientColors})`,
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
        >
            <Typography variant="h5">OnlineStore</Typography>
        </Box>
    );
};

export default GradientTitle;