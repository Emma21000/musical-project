"use clinet"
import React, { useState } from 'react'

export default function Navbar({ data }) {
  const [menu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!menu)
  }
  return (
    <div className='fixed top-0 left-0 w-full' id='home'>
      <div className='relative py-7 bg-[#2B98A4] flex items-center justify-between px-16 text-white'>
        <h1 className='text-3xl font-custom'>{data.logo}</h1>
        <div className={`lg:flex lg:flex-row flex-col left-0 gap-8 top-full lg:static absolute bg-[#2B98A4] w-1/2 lg:w-auto py-10 lg:py-0 px-16 lg:px-0 h-screen lg:h-fit ${menu ? "flex" : "hidden"}`}>
          {data.list.map((elem,index)=>(
          <div key={index} className='flex items-center'>
              <a className='text-3xl font-custom' href={elem.path}>{elem.title}</a>
              <span className='text-4xl font-custom'>{elem.icon}</span>
          </div>
          ))}
        </div>
        <div className='lg:hidden text-3xl cursor-pointer'>
          <span onClick={toggleMenu}>{menu ? data.close : data.icon}</span>
        </div>
      </div>
    </div>
  )
}
