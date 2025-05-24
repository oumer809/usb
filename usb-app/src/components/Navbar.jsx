import React from 'react'
import logo from "../assets/logo.avif"
const Navbar = () => {
  return (
    <div className='mx-auto w-full text-white shadow shadow-slate-700 bg-slate-800 px-3 sm:px-20 md:px-32 h-24 flex justify-between items-center'>
        <div className='flex items-center  '>
            <img src={logo} className='h-16 rounded-full ' alt="logo" />
            <a href="/"><h1 className='pl-3 font-serif font-bold text-2xl '>Bloon</h1></a>
        </div>
        <ul className='hidden sm:flex gap-4 '>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact us</a></li>
        </ul>
        <div className=''>
            <button className=' border border-blue-600 hover:text-white hover:bg-orange-400 rounded  px-4  py-1 mr-2'>Login</button>
        </div>
    </div>
  )
}

export default Navbar