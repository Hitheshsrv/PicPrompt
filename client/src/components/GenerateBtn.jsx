import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { assets } from '../assets/assets'

const GenerateBtn = () => {

  const navigate = useNavigate()

  return (
    <motion.div 
    className='pb-16 text-center'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    >
      <h1 className='font-semibold text-neutral-800 text-2xl md:text-3xl lg:text-4xl py-6 md:py-16'>See the Magic. Try Now</h1>
      <button 
      onClick={() => navigate('/buy')}
      className='inline-flex items-center gap-2 bg-yellow-500 rounded-full text-xl text-red-600 px-12 py-3 m-auto hover:scale-105 transition-all duration-500'>
        Subscription
        <img className='h-6' src={assets.star_group} alt="" />
      </button>
    </motion.div>
  )
}

export default GenerateBtn