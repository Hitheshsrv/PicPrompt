import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <img className='w-[150px]' src={assets.logo} alt="" />
      <p className='flex-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright 2025 @ AiCodinghub - All Right Reserved.</p>
      <div className='flex gap-2.5'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img className='h-9' src={assets.facebook_icon} alt="" />
        </a>
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
          <img className='h-9' src={assets.instagram_icon} alt="" />
        </a>
        <a href="http://x.com" target="_blank" rel="noopener noreferrer">
          <img className='h-9' src={assets.twitter_icon} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Footer