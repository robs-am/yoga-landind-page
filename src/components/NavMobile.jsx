import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { navigation } from '../data';

function NavMobile() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="cursor-pointer text-4xl text-heading ml-[10px] lg:hidden">
        <BiMenu />
      </div>
      <ul
        className={`${
          open ? 'max-h-60 p-8' : 'max-h-0'
        } flex flex-col absolute w-full bg-white top-24 shadow-primary space-y-6 overflow-hidden transition-all`}
      >
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavMobile;
