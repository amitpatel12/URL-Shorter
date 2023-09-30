import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center items-center h-[60px] px-20 bg-black fixed z-[100]'>
      <Link to='/' className='font-bold text-[40px]'>StUrl</Link>
      
    </div>
  )
}

export default Navbar
