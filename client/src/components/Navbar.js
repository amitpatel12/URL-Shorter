import React from "react";

import logo  from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-24 object-contain cursor-pointer' />

        <button
          type='button'
          onClick={() =>
            window.open("https://url-sumz.netlify.app/", "_blank")
          }
          className='black_btn'
        >
          Summarizer
        </button>
      </nav>

      <h1 className='head_text -mt-12'>
        Short URL with <br className='max-md:hidden' />
        <span className='orange_gradient '>U - Nodejs</span>
      </h1>
     
    </header>
  );
};

export default Navbar;