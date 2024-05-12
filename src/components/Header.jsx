import React, { useState, useEffect } from 'react';
import Nav from './Nav';
// import NavMobile from './NavMobile';

import Logo from '../assets/img/logo.png';

function Header() {
  const [header, setHeader] = useState(false);
  return (
    <header
      className={`${
        header ? 'top-0' : 'top-9'
      } max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 x-20 transtion-all duration-500 fixed bg-white w-full`}
    >
      <div className="flex items-center">
        {/* Logo */}
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        {/* nav */}
        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
