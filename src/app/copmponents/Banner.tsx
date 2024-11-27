import React from 'react'
function Banner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-tr from-black to-grey-700 font-sans px-6 
    py-12 mb-7'>Banner
    <div className='absolute inset-0 opacity-20'>
      <img src='images/burger.jpg'
alt='delicious burger banner'
className='w-full h-full object-cover'/>
    </div>
<div className='relative z-10 container mx-auto flex flex-col justify-center items-center font-medium'>
  <h2 className='text-white sm:text-5xl font-bold'> Discover Our Menu</h2>
  <p className='text-white  text-lg text-center mb-6 max-w-xl'>Shop Now For Exclusive Discount!</p>
  <button type='button' 
  className='bg-blue-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-600'>Exciting Deals For Launch 12PM!</button>
</div>
</div>


  )
}

export default Banner
