import React from 'react'

export default function WhyUs({ data }) {
  return (
    <div className='bg-[#9C92A3] w-full h-full py-16 flex flex-col text-white text-center gap-y-6 lg:px-0 px-10'>
        <span className='text-4xl font-header tracking-widest'>{data.name}</span>
        <span className='text-xl lg:w-xl w-full font-header tracking-widest mx-auto leading-8'>{data.description}</span>
            {data.info.map((elem, index)=>(
                <div className='w-full grid grid-cols-1 items-center justify-center gap-y-16' key={index}>
                    <p className='border-b-3 border-white lg:w-2/3 w-11/12 mx-auto py-4'></p>
                    <div className='w-auto lg:w-2/3 grid lg:grid-cols-2 grid-cols-1 justify-items-center mx-auto'>
                        <img src={elem.image} alt="elem.img" />
                        <div className='flex flex-col gap-y-8 items-center justify-center'>
                            <p className='text-4xl font-header pt-8 lg:pt-0'>{elem.title}</p>
                            <p className='lg:text-2xl lg:w-xl w-full font-header leading-9 font-light'>{elem.description}</p>
                        </div>
                    </div>
                </div>
            ))}
    </div>
  )
}
