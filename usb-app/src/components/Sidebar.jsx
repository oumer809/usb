import React from 'react'
import { CiHome } from "react-icons/ci";
import { FiBarChart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAlignJustify } from "react-icons/fa";
const Sidebar=() =>{
  return (
    <div className='w-14 sm:w-20  h-screen text-center shadow-r shadow-slate-700 mr-3'>
        <CiHome size={50} className=' text-white bg-slate-400 px-2 my-4 py-3 rounded-xl mx-auto'/>
        <FiBarChart size={50} className=' text-white bg-slate-400 px-2 my-4 py-3 rounded-xl mx-auto'/>
        <IoSettingsOutline size={50} className=' text-white bg-slate-400 px-2 my-4 py-3 rounded-xl mx-auto'/>
        <FaAlignJustify size={50} className=' text-white bg-slate-400 px-2 my-4 py-3 rounded-xl mx-auto'/>
    </div>
  )
}

export default Sidebar