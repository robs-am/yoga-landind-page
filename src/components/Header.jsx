import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Logo from '../assets/img/logo.png';

function Header() {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      const isScrolledToTop = currentScrollPos === 0;

      if (isScrolledToTop) {
        setHeaderVisibility(true);
      } else {
        setHeaderVisibility(isScrollingDown);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`transition-all ease-out duration-100 ${
        isHeaderVisible ? 'top-0 lg:top-3' : '-top-full'
      }  lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 x-20 fixed z-10 bg-white w-full flex items-center justify-between w-full`}
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
          <button className="text-heading font-medium text-sm lg:text-base hover:text-gray-500 transition">
            Sign in
          </button>
          <button className="btn btn-md lg:px-[30px]  text-white font-medium text-sm lg:text-base hover:bg-gray-900 hover:text-white transition">
            Sign up
          </button>
        </div>
        <NavMobile />
      </div>
    </header>
  );
}

export default Header;
