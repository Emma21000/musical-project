import React from 'react'

export default function Contact({ data }) {
  return (
    <div className='bg-[#2F4550] w-full py-20 flex flex-col text-center gap-y-14 lg:px-0 px-10'>
        <h3 className='text-4xl font-header text-white tracking-widest'>{data.title}</h3>
        <p className='text-2xl text-white text-center w-auto lg:w-xl mx-auto leading-10 tracking-widest'>{data.description}</p>
        <form className='lg:w-1/2 w-full grid grid-cols-1 justify-items-start gap-y-8 lg:mx-auto text-white'>
            <div className='w-full grid lg:grid-cols-2 grid-cols-1 justify-items-start gap-x-20 gap-y-8'>
              <div className='grid grid-cols-1 justify-items-start w-full'>
                <label htmlFor='First Name' className='text-3xl cursor-pointer font-custom tracking-widest'>First Name</label>
                <input type='text' name='Name' id='First Name' className='w-full py-4 border-b-2 focus:border-[#36cadb] transition-all duration-300 focus:outline-none text-2xl font-custom' />
              </div>
              <div className='grid grid-cols-1 justify-items-start w-full'>
                <label htmlFor='Last Name' className='text-3xl cursor-pointer font-custom tracking-widest'>Last Name</label>
                <input type='text' name='lastName' id='Last Name' className='w-full py-4 border-b-2 focus:border-[#36cadb] transition-all duration-300 focus:outline-none text-2xl font-custom' />
              </div>
            </div>
            <label htmlFor='Your Email' className='text-3xl cursor-pointer font-custom tracking-widest'>Email</label>
            <input type='email' name='Email' id='Your Email' className='text-2xl w-full py-4 border-b-2 focus:border-[#36cadb] transition-all duration-300 focus:outline-none font-custom' />
            <label htmlFor='message' className='text-3xl cursor-pointer font-custom tracking-widest'>Write a message</label>
            <textarea name='Your message' id='message' className='text-2xl w-full py-4 border-b-2 focus:border-[#36cadb] transition-all duration-300 focus:outline-none font-custom resize-none'></textarea>
            <button className='w-80 py-4 border-2 border-white text-3xl mt-10 rounded-full hover:bg-[#2B98A4] cursor-pointer tracking-widest font-custom scale-105 hover:scale-95 transition-all duration-300'>Submit</button>
       </form>
    </div>
  )
}
