// Home.jsx

import React from 'react';
import Button from '../../Components/Button/Button';

const Header = () => {
  return (
    <div className="bg-gray-100 h-screen  items-center justify-center">
      <div className='bg-heroImg relative top-0 bg-cover h-full 2xl:bg-cover 2xl:h-full xl:h-full lg:h-full md:h-full bg-right w-full flex justify-start items-center '>
        <div className='z-1 text-white text-2xl font-lexend font-semibold 2xl:text-5xl pl-52 pt-52'>
          <h1>Seja privilegiado</h1>
          <h1>Seja <span className='text-[#ff364e]'>Pri</span>Bank</h1>
          <Button 
            title={"Saiba Mais"}
            classname={"bg-[#ff364e] rounded-2xl duration-500 hover:bg-[#c43949]  2xl:text-base 2xl:w-36 2xl:h-10 2xl:text-1xl font-lexend h-7 w-24"}
          />
        </div>
      </div>
      <div className='bg-white w-full h-48'>

      </div>
      <div className='bg-white w-full h-48'>

</div>
    </div>
  );
};

export default Header;

