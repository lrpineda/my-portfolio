import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='md:h-screen  snap-center snap-always bg-[#232425] pb-11 text-white justify-center mx-auto flex gap-6 flex-col items-center'>
        <form >
            <div className='flex flex-col gap-12 w-96 lg:w-[800px]'>
                <input type='text' placeholder='Name' className='bg-transparent border-b-2 w-full border-white  p-2 text-white focus:outline-none focus:border-[#274A71]' />
                <input type='email' placeholder='Email' className='bg-transparent border-b-2 w-full border-white  p-2 text-white focus:outline-none focus:border-[#274A71]' />
                <textarea rows={5} placeholder='Message' className='bg-transparent border-b-2 w-full border-white  p-2 text-white focus:outline-none focus:border-[#274A71]' />
                <button className='bg-[#274A71] hover:bg-white text-white w-full hover:text-black p-2 rounded-md transition-all duration-300 ease-in-out '>Send</button>
            </div>
        </form>
    </div>
  )
}

export default Contact