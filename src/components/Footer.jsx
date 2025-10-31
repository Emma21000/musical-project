import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer({ data }) {
  return (
    <div className='bg-[#C5B7CC] gap-y-20 py-16 flex flex-col items-center'>
      <a href='/' className='text-5xl font-header tracking-wider'>{data.title}</a>
      <img src={data.img} alt='img' className='w-4/5 h-72 lg:h-[540px] object-center shadow-lg shadow-black'></img>
      <div className='flex lg:flex-row flex-col w-4/5 '>
        <div className='flex flex-col gap-y-10'>
          <p className='text-4xl font-custom tracking-wider'>{data.name}</p>
          <form className='flex flex-col gap-y-6'>
            <label htmlFor='Email' className='text-2xl font-custom tracking-widest'>Email</label>
            <input type='email' id='Email' name='text' className='lg:w-96 w-auto focus:outline-none border-b-2 border-black py-4 text-2xl font-header'></input>
          </form>
            <div className='flex flex-row gap-6'>
              <input type="checkbox" className='size-8 cursor-pointer'/>
              <p className='text-2xl font-custom lg:w-80 w-auto tracking-widest'>{data.subscribe}</p>
          </div>
          <button className='w-72 py-4 rounded-full border-2 border-white cursor-pointer text-2xl font-custom font-bold text-white hover:bg-[#9C92A3] transition-all duration-300 scale-105 hover:scale-95 tracking-widest'>Subscribe</button>
        </div> 
          <div className='w-4/5 grid lg:grid-cols-2 grid-cols-1 lg:justify-items-end justify-items-start pt-10'>
            {data.list.map((item,index)=>(
              <div key={index} className='flex flex-col gap-y-4'>
                <p className='text-2xl font-header tracking-wider'>{item.name}</p>
                <a href="#" className='text-2xl font-header font-thin tracking-wider'>{item.title}</a>
                <p className='text-xl w-80 font-header font-thin tracking-wider'>{item.address}</p>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}
