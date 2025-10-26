import React from 'react'
import { useLocation } from 'react-router-dom'

export default function NewPage({ data }) {
  const location = useLocation()
  const {event,index} = location.state
  const extra = data.list[index]

  return (
    <div className='w-full flex flex-col py-16 gap-y-8 bg-[#2B98A4]'>
      <a href="/" className='px-44 text-3xl text-white font-header'>{data.home}</a>
      <img className='lg:w-1/2 w-11/12 mx-auto' src={event.img}/>
      <div className='grid lg:grid-cols-2 grid-cols-1 w-1/2 mx-auto text-white'>
        <div className='grid grid-cols-1 gap-y-10 text-center'>
        <h1 className=' lg:text-4xl text-2xl font-header mt-4'>{event.title}</h1>
        <div className='flex justify-center gap-12'>
          <p className='text-xl font-header tracking-wider'>{event.date}</p>
          <p className='text-xl font-header tracking-wider'>{event.name}</p>
        </div>
        <span className='text-xl font-custom lg:w-96 w-auto mx-auto leading-9'>{event.description}</span>
        <button className='mx-auto cursor-pointer py-4 px-10 w-64 border-2 border-white rounded-full hover:underline text-xl font-custom tracking-wider text-center'>{event.buttonName}</button>
        </div>
         <div className='gird grid-cols-1 text-center'>
          {extra && (
          <div className='grid grid-cols-1 pt-6 gap-y-4'>
              <p className='text-4xl font-header tracking-wider pb-3'>{extra.name}</p>
              <p className='text-xl font-header'>{extra.dateone}</p>
              <p className='text-xl font-header'>{extra.space}</p>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}


