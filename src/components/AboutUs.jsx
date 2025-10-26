import React from 'react'

export default function AboutUs({ data }) {
  return (
    <div className='flex flex-col items-center w-full py-16 bg-[#2F4550] text-white'>
        <p className='text-5xl font-custom'>About Us</p>
        <div className='w-full flex lg:flex-row flex-col items-center justify-center gap-14 mt-14'>
            <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.1)), ${data.img}`}} className='lg:w-1/2 w-4/5 bg-no-repeat bg-cover bg-center h-[630px]  rounded-lg drop-shadow-xl drop-shadow-white' ></div>
            <div className='flex flex-col justify-center gap-y-6'>
                <p className='text-5xl font-custom mx-auto'>{data.title}</p>
                <p className='text-2xl lg:w-xl w-auto font-header leading-8 px-8'>{data.description}</p>
            </div>
        </div>
    </div>
  )
}
