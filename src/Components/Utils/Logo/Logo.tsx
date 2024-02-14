/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';
import Logo1 from '../../../assets/svg/online-shopping/logo1.svg';
import Logo2 from '../../../assets/svg/online-shopping/logo2.svg';
import Logo3 from '../../../assets/svg/online-shopping/logo3.svg';
import Logo4 from '../../../assets/svg/online-shopping/logo4.svg';


interface LogoProps {
  width: string;
  height: string;
  logo: string;
}

const Logo: React.FC<LogoProps> = ({ logo, width, height }) => {


  return (
    <img
      src={logo === 'Logo1' ? Logo1
        : logo === 'Logo2' ? Logo2
          : logo === 'Logo3' ? Logo3
            : Logo4}
      alt="Logo"
      style={{
        width: width,
        height: height,
        filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.7))'
      }}
    />
  );
};

export default Logo;