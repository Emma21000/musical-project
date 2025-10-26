import React from 'react'
import { Link } from 'react-router-dom'

export default function Events({ data }) {
  return (
    <div className='w-full grid grid-cols-1 py-16 bg-[#C5B7CC]' id='events'>
      <h2 className='mx-auto text-5xl font-custom'>{data.title}</h2>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 w-4/5 mx-auto pt-10'>
        {data.information.map((elem, index) => (
          <div key={index} className='h-full bg-[#9C92A3] grid grid-cols-1 gap-y-10'>
            <img className=' w-full h-[350px]' src={elem.img} alt={elem.title} />
            <div className='px-10 grid grid-cols-1 gap-y-6 pb-10'>
              <Link
                to="/newpage"
                state={{event: elem,index}}   // ➤ այստեղ փոխանցում ենք ամբողջ event-ի object-ը
                className='text-2xl font-custom w-96 cursor-pointer hover:underline'
              >
                {elem.title}
              </Link>
              <div className='flex gap-12'>
                <p className='text-xl font-header tracking-wider'>{elem.date}</p>
                <p className='text-xl font-header tracking-wider'>{elem.name}</p>
              </div>
              <p className='cursor-pointer text-2xl underline hover:no-underline font-custom tracking-wider'>
                {elem.more}
              </p>
              <Link
                to="/newpage"
                state={{event: elem,index}}
                className='cursor-pointer py-4 px-10 w-64 border-2 border-white rounded-full hover:underline text-xl font-custom tracking-wider text-center'
              >
                {elem.buttonName}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
