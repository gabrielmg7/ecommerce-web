import { useThemeContext } from '../../Themes/ThemeProviderWrapper';
import DarkLogo from '../../assets/svg/online-shopping/dark-logo.svg';
import LightLogo from '../../assets/svg/online-shopping/light-logo.svg';

interface LogoProps {
  width?: string;
  height?: string;
}

const Logo: React.FC<LogoProps> = ({ width = '100%', height = '100%' }) => {
  const { theme } = useThemeContext();

  return (
    <img 
      src={theme.palette.mode === 'dark' ? DarkLogo : LightLogo} 
      alt="Logo" 
      style={{ 
        width, 
        height, 
        filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.7))' 
      }}
    />
  );
};

export default Logo;