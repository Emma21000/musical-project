import React from 'react'

export default function Hero({ data }) {
  return (
    <div style={{backgroundImage: data.img}} className='flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center w-full h-screen' >
        <div className='text-white w-4/5 flex flex-col items-start justify-center text-center gap-y-8'>
            <h2 className='text-4xl font-custom tracking-wider'>{data.title}</h2>
            <h2 className='text-2xl font-header tracking-wider'>{data.subtitle}</h2>
            <button className='my-6 text-2xl py-4 px-8 border-2 rounded-full cursor-pointer hover:bg-[#2B98A4] hover:transition-all hover:duration-300'>{data.buttonName}</button>
        </div>
    </div>
  )
}
