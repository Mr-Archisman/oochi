import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen px-8 flex items-center justify-center'>
        <div className="cardcontainer w-full  flex h-[55vh] gap-5 my-10 ">
            <div className='bg-[#014C43] flex items-center justify-center w-1/2 rounded-xl'>
                <h1 className='text-[#D0EC66] text-5xl font-semibold'>ochi </h1>

            </div>
            <div className='w-1/4 bg-[#028d7d] flex items-center justify-center rounded-xl'>
                <h1 className='text-zinc-300 text-5xl font-semibold'>Clutch</h1>
            </div>
            <div className='w-1/4 bg-[#09a895] flex items-center justify-center rounded-xl'>
                <h1 className='text-zinc-300 text-5xl font-semibold'>Logo</h1>
            </div>
        </div>
    </div>
  )
}

export default Cards