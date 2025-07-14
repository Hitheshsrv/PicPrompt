import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Description = () => {
  return (
    <motion.div 
    className='flex flex-col justify-center items-center my-24 p-6 md:px-28'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    >
      
      <h1 className='text-3xl sm:text-4xl'>Generate AI Images</h1>
      <p className='text-lg mb-8 text-gray-500'>Bring Creative Vision to Life</p>
      
      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img className='w-80 xl:w-96 rounded-lg' src={assets.sample_img_2} alt="" />
        <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI Website - Your Ultimate Text to Image Generator</h2>
          <p className='text-gray-600 '>Effortlessly bring your ideas to life with our free AI image generator. Transform your text into stunning visuals in seconds. Imagine, describe, and see your vision come to life instantly</p>
          <br />
          <p className='text-gray-600'>Type a text prompt, and our advanced AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even non-existent concepts come to life effortlessly. Unleash limitless creativity with our AI technology.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description