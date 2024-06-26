import React from 'react';
import { Parallax } from 'react-parallax';
import { hero } from '../data';

import Header from './Header';

function Hero() {
  return (
    <section className="min-h-[618px] lg:min-h-[815px]">
      <div className="container mx-auto flex flex-col items-center max-w-full bg-hero bg-cover">
        <div className="flex justify-center">
          <Header />
          <div className="flex flex-col mt-28 lg:flex-row">
            <div className="intro flex flex-col items-start justify-center text-left max-w-80 lg:max-w-none">
              <h1 className="h1  mb-3 lg:mb-6">{hero.title}</h1>
              <p className="mb-6 lg:mb-12 max-w-md lg:text-lg">{hero.desc}</p>
              <div>
                <div className="btn-group mb-8 space-x-4">
                  <button className="btn btn-sm lg:btn-lg text-white bg-gray hover:bg-gray-900 transition">
                    Get started
                  </button>
                  <button className="btn btn-sm lg:btn-lg text-gray bg-transparent border border-stroke-1 px-4 hover:bg-stroke-3 transition">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="lg:w-auto">
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="h-[234px] lg:w-[504px] lg:h-[744px] lg:mt-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
