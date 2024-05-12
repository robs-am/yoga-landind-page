import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';

import Logo from '../assets/img/logo.png';

function Header() {
  const [header, setHeader] = useState(false);
  return (
    <header
      className={`${
        header ? 'top-0' : 'lg:top-9 max-w-none'
      } max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 x-20 transtion-all duration-500 fixed z-10 bg-white w-full flex items-center justify-between`}
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
      <div className="flex items center">
        {/* buttons */}
        <div className="flex gap-x-4 lg:gap-x-9">
          <button className="text-heading font-medium text-sm lg:text-base hover:text-orange transition">
            Sign in
          </button>
          <button className="btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium textt-sm lg:text-base hover:bg-orange-200 hover:text-white transition">
            Sign up
          </button>
        </div>
        <NavMobile />
      </div>
    </header>
  );
}

export default Header;
