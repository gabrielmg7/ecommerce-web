import React, { useEffect } from 'react'
import { IconButton } from '@mui/material'
import { useThemeContext } from '../../../Themes/ThemeProviderWrapper'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

const ToggleThemeButton: React.FC = () => {
    const { toggleTheme, theme } = useThemeContext();

    const handleToggle = () => {
        toggleTheme();
      };
    
     useEffect(() => {
         console.log('📞 handleToggle() - 🌙🌞 Theme Mode:', theme.palette.mode);
     }, [theme]);

    return (
        <div>
            <IconButton style={{ color: theme.palette.text.primary }} onClick={handleToggle}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon  /> : <Brightness4Icon />}
            </IconButton>
        </div>
    )
}


export default ToggleThemeButton;
