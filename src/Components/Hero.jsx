import React from 'react'
import HeroImg from '../assets/hero.webp'

function Hero() {
  return (
    <div className='relative mt-4'>
      <img src={HeroImg} alt="Hero" className='w-[100%]' />
            <button className='absolute bottom-[3%] left-[25%] bg-white text-black py-2 px-4 rounded-3xl font-bold'>Shop the new collection</button>
    </div>
  )
}

export default Hero