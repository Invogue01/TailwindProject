import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu}from "react-icons/ai"


const Navbar = () => {
const [nav, setNav]= useState(false)
const handleNav = ()=> {
    setNav(!nav)
}
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px]mx- px-4 text-white'>
<h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT!</h1>
<ul className='flex'>
    <li className='p-4'>Company</li>
    <li className='p-4'>Home</li>
    <li className='p-4'>Resources</li>
    <li className='p-4'>About</li>
    <li className='p-4'>Contact</li>
</ul>
<div>
    <AiOutlineMenu size={20}/>
</div>
<div className="fixed left-0 top-0 w-[60%]h-full border-r border-gray-300 bg-slate-600 ">
<h1 className='w-full text-3xl font-bold text-[#00df9a]m-4'>REACT!</h1>
<ul className='p-4 uppercase '>
    <li className='p-4 border-b border-gray-300'>Company</li>
    <li className='p-4 border-b border-gray-300'>Home</li>
    <li className='p-4 border-b border-gray-300'>Resources</li>
    <li className='p-4 border-b border-gray-300'>About</li>
    <li className='p-4'>Contact</li>
</ul>
</div>
    </div>
  )
}


export default Navbar